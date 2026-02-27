import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Alte Produkt-URLs → neue Unterseiten
      {
        source: "/matratzen",
        destination: "/matratzen-bocholt",
        permanent: true,
      },
      {
        source: "/boxspringbetten",
        destination: "/boxspringbetten-bocholt",
        permanent: true,
      },
      {
        source: "/holzbetten",
        destination: "/holzbetten-bocholt",
        permanent: true,
      },
      {
        source: "/beratung",
        destination: "/beratung-probeliegen",
        permanent: true,
      },
      // Alte Content-Seiten → Startseite
      {
        source: "/erdungsspanntücher",
        destination: "/",
        permanent: true,
      },
      {
        source: "/chronotypen-test",
        destination: "/",
        permanent: true,
      },
      {
        source: "/stores",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wechseljahre",
        destination: "/",
        permanent: true,
      },
      {
        source: "/schlafnerds-beute",
        destination: "/",
        permanent: true,
      },
      {
        source: "/matratzenreinigung",
        destination: "/",
        permanent: true,
      },
      {
        source: "/kissentaxi",
        destination: "/nackenstuetzkissen-bocholt",
        permanent: true,
      },
      // Alte Sprachpfade
      {
        source: "/kids/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en-gb/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/nl/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
