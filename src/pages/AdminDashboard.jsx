import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const BUCKET_NAME = 'portfolio-media'

function AdminDashboard() {
  const navigate = useNavigate()

  const [projects, setProjects] = useState([])
  const [arts, setArts] = useState([])

  const [loadingProjects, setLoadingProjects] = useState(true)
  const [loadingArts, setLoadingArts] = useState(true)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [technologies, setTechnologies] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [projectUrl, setProjectUrl] = useState('')
  const [githubUrl, setGithubUrl] = useState('')
  const [featured, setFeatured] = useState(false)
  const [projectImageFile, setProjectImageFile] = useState(null)
  const [uploadingProjectImage, setUploadingProjectImage] = useState(false)

  const [artTitle, setArtTitle] = useState('')
  const [artDescription, setArtDescription] = useState('')
  const [artCategory, setArtCategory] = useState('')
  const [artImageUrl, setArtImageUrl] = useState('')
  const [artImageFile, setArtImageFile] = useState(null)
  const [uploadingArtImage, setUploadingArtImage] = useState(false)

  const projectPreview = useMemo(() => {
    if (projectImageFile) return URL.createObjectURL(projectImageFile)
    return imageUrl || ''
  }, [projectImageFile, imageUrl])

  const artPreview = useMemo(() => {
    if (artImageFile) return URL.createObjectURL(artImageFile)
    return artImageUrl || ''
  }, [artImageFile, artImageUrl])

  useEffect(() => {
    return () => {
      if (projectImageFile) URL.revokeObjectURL(projectPreview)
      if (artImageFile) URL.revokeObjectURL(artPreview)
    }
  }, [projectImageFile, artImageFile, projectPreview, artPreview])

  async function handleLogout() {
    await supabase.auth.signOut()
    navigate('/admin')
  }

  async function fetchProjects() {
    setLoadingProjects(true)

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('id', { ascending: false })

    if (!error) setProjects(data || [])
    setLoadingProjects(false)
  }

  async function fetchArts() {
    setLoadingArts(true)

    const { data, error } = await supabase
      .from('arts')
      .select('*')
      .order('id', { ascending: false })

    if (!error) setArts(data || [])
    setLoadingArts(false)
  }

  function getSafeFileExt(file) {
    const parts = file.name.split('.')
    return parts.length > 1 ? parts.pop().toLowerCase() : 'png'
  }

  async function uploadImage(file, folder) {
    const fileExt = getSafeFileExt(file)
    const filePath = `${folder}/${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type || undefined,
      })

    if (uploadError) {
      throw uploadError
    }

    const { data } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath)

    return data.publicUrl
  }

  async function handleCreateProject(e) {
    e.preventDefault()

    setUploadingProjectImage(true)

    try {
      const techArray = technologies
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)

      let finalImageUrl = imageUrl.trim()

      if (projectImageFile) {
        finalImageUrl = await uploadImage(projectImageFile, 'projects')
      }

      const { error } = await supabase.from('projects').insert([
        {
          title,
          description,
          technologies: techArray,
          image_url: finalImageUrl || null,
          project_url: projectUrl,
          github_url: githubUrl,
          featured,
        },
      ])

      if (error) {
        alert('Erro ao cadastrar projeto.')
        return
      }

      setTitle('')
      setDescription('')
      setTechnologies('')
      setImageUrl('')
      setProjectUrl('')
      setGithubUrl('')
      setFeatured(false)
      setProjectImageFile(null)

      fetchProjects()
    } catch (error) {
      alert(`Erro ao fazer upload da imagem do projeto: ${error.message}`)
    } finally {
      setUploadingProjectImage(false)
    }
  }

  async function handleDeleteProject(id) {
    const confirmDelete = window.confirm('Deseja excluir este projeto?')
    if (!confirmDelete) return

    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)

    if (error) {
      alert('Erro ao excluir projeto.')
      return
    }

    fetchProjects()
  }

  async function handleCreateArt(e) {
    e.preventDefault()

    setUploadingArtImage(true)

    try {
      let finalImageUrl = artImageUrl.trim()

      if (artImageFile) {
        finalImageUrl = await uploadImage(artImageFile, 'arts')
      }

      const { error } = await supabase.from('arts').insert([
        {
          title: artTitle,
          description: artDescription,
          category: artCategory,
          image_url: finalImageUrl || null,
        },
      ])

      if (error) {
        alert('Erro ao cadastrar arte.')
        return
      }

      setArtTitle('')
      setArtDescription('')
      setArtCategory('')
      setArtImageUrl('')
      setArtImageFile(null)

      fetchArts()
    } catch (error) {
      alert(`Erro ao fazer upload da imagem da arte: ${error.message}`)
    } finally {
      setUploadingArtImage(false)
    }
  }

  async function handleDeleteArt(id) {
    const confirmDelete = window.confirm('Deseja excluir esta arte?')
    if (!confirmDelete) return

    const { error } = await supabase
      .from('arts')
      .delete()
      .eq('id', id)

    if (error) {
      alert('Erro ao excluir arte.')
      return
    }

    fetchArts()
  }

  useEffect(() => {
    fetchProjects()
    fetchArts()
  }, [])

  const inputClass =
    'w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-400/40 focus:bg-black'
  const panelClass =
    'rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-sm'

  return (
    <div className="h-screen overflow-y-auto bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_20%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_18%),#000] text-white">
      <div className="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              Admin Panel
            </p>
            <h1 className="mt-1 text-3xl font-bold">Painel de Controle</h1>
            <p className="mt-1 text-sm text-zinc-400">
              Gerencie projetos e artes do seu portfólio.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-2xl border border-white/10 px-4 py-2 text-sm transition hover:border-red-400/30 hover:bg-red-400/10"
          >
            Sair
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-cyan-400">Projetos</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Cadastre, visualize e remova projetos exibidos no site.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div className={panelClass}>
              <h3 className="text-xl font-semibold">Novo Projeto</h3>

              <form onSubmit={handleCreateProject} className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Título do projeto"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={inputClass}
                  required
                />

                <textarea
                  placeholder="Descrição"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={`${inputClass} min-h-[120px] resize-none`}
                />

                <input
                  type="text"
                  placeholder="Tecnologias separadas por vírgula"
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  className={inputClass}
                />

                <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <label className="block text-sm font-medium text-zinc-300">
                    Upload da imagem do projeto
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProjectImageFile(e.target.files?.[0] || null)}
                    className="block w-full text-sm text-zinc-300 file:mr-4 file:rounded-xl file:border-0 file:bg-cyan-400 file:px-4 file:py-2 file:font-semibold file:text-black"
                  />
                  <p className="text-xs text-zinc-500">
                    Ou, se preferir, use uma URL manual abaixo.
                  </p>
                  <input
                    type="text"
                    placeholder="URL da imagem"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className={inputClass}
                  />
                  {projectPreview && (
                    <img
                      src={projectPreview}
                      alt="Preview do projeto"
                      className="h-40 w-full rounded-2xl object-cover border border-white/10"
                    />
                  )}
                </div>

                <input
                  type="text"
                  placeholder="URL do projeto"
                  value={projectUrl}
                  onChange={(e) => setProjectUrl(e.target.value)}
                  className={inputClass}
                />

                <input
                  type="text"
                  placeholder="URL do GitHub"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  className={inputClass}
                />

                <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-300">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                  />
                  Projeto em destaque
                </label>

                <button
                  type="submit"
                  disabled={uploadingProjectImage}
                  className="w-full rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-black transition hover:bg-cyan-300 disabled:opacity-60"
                >
                  {uploadingProjectImage ? 'Enviando imagem...' : 'Cadastrar Projeto'}
                </button>
              </form>
            </div>

            <div className={panelClass}>
              <h3 className="text-xl font-semibold">Projetos Cadastrados</h3>

              {loadingProjects ? (
                <p className="mt-6 text-zinc-400">Carregando projetos...</p>
              ) : projects.length === 0 ? (
                <p className="mt-6 text-zinc-400">Nenhum projeto cadastrado ainda.</p>
              ) : (
                <div className="mt-6 space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-cyan-400/20"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="text-lg font-semibold">{project.title}</h4>
                            {project.featured && (
                              <span className="rounded-full border border-cyan-400/30 px-2 py-1 text-[10px] text-cyan-300">
                                Destaque
                              </span>
                            )}
                          </div>

                          <p className="mt-2 text-sm text-zinc-400">
                            {project.description}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {(project.technologies || []).map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-cyan-400/30 px-2.5 py-1 text-[10px] text-cyan-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="shrink-0 rounded-xl border border-red-400/30 px-3 py-2 text-xs text-red-300 transition hover:bg-red-400/10"
                        >
                          Excluir
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-cyan-400">Artes</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Cadastre e organize suas artes exibidas no portfólio.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div className={panelClass}>
              <h3 className="text-xl font-semibold">Nova Arte</h3>

              <form onSubmit={handleCreateArt} className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Título da arte"
                  value={artTitle}
                  onChange={(e) => setArtTitle(e.target.value)}
                  className={inputClass}
                  required
                />

                <textarea
                  placeholder="Descrição"
                  value={artDescription}
                  onChange={(e) => setArtDescription(e.target.value)}
                  className={`${inputClass} min-h-[120px] resize-none`}
                />

                <input
                  type="text"
                  placeholder="Categoria"
                  value={artCategory}
                  onChange={(e) => setArtCategory(e.target.value)}
                  className={inputClass}
                />

                <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <label className="block text-sm font-medium text-zinc-300">
                    Upload da imagem da arte
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setArtImageFile(e.target.files?.[0] || null)}
                    className="block w-full text-sm text-zinc-300 file:mr-4 file:rounded-xl file:border-0 file:bg-cyan-400 file:px-4 file:py-2 file:font-semibold file:text-black"
                  />
                  <p className="text-xs text-zinc-500">
                    Ou, se preferir, use uma URL manual abaixo.
                  </p>
                  <input
                    type="text"
                    placeholder="URL da imagem"
                    value={artImageUrl}
                    onChange={(e) => setArtImageUrl(e.target.value)}
                    className={inputClass}
                  />
                  {artPreview && (
                    <img
                      src={artPreview}
                      alt="Preview da arte"
                      className="h-40 w-full rounded-2xl object-cover border border-white/10"
                    />
                  )}
                </div>

                <button
                  type="submit"
                  disabled={uploadingArtImage}
                  className="w-full rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-black transition hover:bg-cyan-300 disabled:opacity-60"
                >
                  {uploadingArtImage ? 'Enviando imagem...' : 'Cadastrar Arte'}
                </button>
              </form>
            </div>

            <div className={panelClass}>
              <h3 className="text-xl font-semibold">Artes Cadastradas</h3>

              {loadingArts ? (
                <p className="mt-6 text-zinc-400">Carregando artes...</p>
              ) : arts.length === 0 ? (
                <p className="mt-6 text-zinc-400">Nenhuma arte cadastrada ainda.</p>
              ) : (
                <div className="mt-6 space-y-4">
                  {arts.map((art) => (
                    <div
                      key={art.id}
                      className="rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-cyan-400/20"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h4 className="text-lg font-semibold">{art.title}</h4>

                          <p className="mt-2 text-sm text-zinc-400">
                            {art.description}
                          </p>

                          {art.category && (
                            <span className="mt-3 inline-block rounded-full border border-cyan-400/30 px-2.5 py-1 text-[10px] text-cyan-300">
                              {art.category}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => handleDeleteArt(art.id)}
                          className="shrink-0 rounded-xl border border-red-400/30 px-3 py-2 text-xs text-red-300 transition hover:bg-red-400/10"
                        >
                          Excluir
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminDashboard