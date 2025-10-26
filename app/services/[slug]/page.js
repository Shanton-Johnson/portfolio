'use client';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { assets, serviceData } from '@/assets/assets';

export default function ServiceDetails() {
  const { slug } = useParams();
  const router = useRouter();

  const service = serviceData.find(
    (s) => s.link.split('/').pop().toLowerCase() === slug.toLowerCase()
  );

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center dark:text-white">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <button
          onClick={() => router.back()}
          className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Back to Services
        </button>
      </div>
    );
  }

  const handleBack = () => {
    // If user came from the home page, just go back without full reload
    if (document.referrer.includes(window.location.origin)) {
      router.back();
    } else {
      // Fallback if user directly opened this page (no referrer)
      window.location.href = '/#services';
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8"
        >
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-blue-600 dark:hover:text-blue-400">
            Services
          </Link>
          <span>/</span>
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            {service.title}
          </span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="p-6 bg-blue-50 dark:bg-blue-950/30 rounded-full mb-6">
            <Image src={service.icon} alt={service.title} width={60} height={60} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {service.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {service.description}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-14 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <p>
            <strong>{service.title}</strong> combines modern design and technology to deliver
            exceptional results. Whether you need a custom interface, a sleek website, or a
            mobile experience, I bring creativity and precision to every project.
          </p>
          <p>
            My process includes research, wireframing, prototyping, and testing — ensuring a
            balance between aesthetics and usability. I aim for products that are visually
            stunning, performant, and user-friendly.
          </p>
          <p>
            The focus is on clean design, scalability, and engaging user experiences that help
            brands connect meaningfully with audiences.
          </p>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            onClick={handleBack}
            className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all"
          >
            ← Back to Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
