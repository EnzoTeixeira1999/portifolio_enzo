import { motion } from "framer-motion";

function SkillCard({ Icon, title, color = "#22d3ee" }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{ duration: 0.2 }}
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-cyan-400/20
        bg-zinc-900/40
        p-5
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-cyan-300
        hover:shadow-[0_0_30px_rgba(34,211,238,.18)]
      "
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl"
        style={{
          background: `${color}15`,
        }}
      >
        <Icon
          size={34}
          color={color}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <span className="text-base font-medium tracking-wide text-zinc-200">
        {title}
      </span>
    </motion.div>
  );
}

export default SkillCard;