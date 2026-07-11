export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

      {/* Aurora Blob 1 */}
      <div className="aurora aurora-1" />

      {/* Aurora Blob 2 */}
      <div className="aurora aurora-2" />

      {/* Aurora Blob 3 */}
      <div className="aurora aurora-3" />

      {/* Soft Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />

      {/* Fade to Background */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--background)]" />

    </div>
  );
}