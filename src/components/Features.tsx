import Bentodemo from './bentogrid';

export const Features = () => {
  return (
    <div id="services" className="bg-black text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
          Reliable repairs and services for all your mobile devices, handled by expert technicians. </p>
        </div>

        {/* BentoGrid inside container */}
        <div className="mt-16">
          <Bentodemo />
        </div>
      </div>
    </div>
  );
};
