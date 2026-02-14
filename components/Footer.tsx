export default function Footer() {
  return (
    <footer className="w-full bg-[#131921] border-t border-neutral-800 text-neutral-400">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm space-y-2">

        <p>
          AWS Cloud Club @ York University · CTRL+HACK+DEL 2.0 Workshop
        </p>

        <p>
          Demonstrating real-world full-stack deployment using AWS Amplify,
          GitHub CI/CD, and Amazon S3.
        </p>

        <p className="text-neutral-500">
          © {new Date().getFullYear()} AWS Cloud Club @ York University
        </p>

      </div>
    </footer>
  );
}
