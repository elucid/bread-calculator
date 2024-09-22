{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_20  # Node.js 20.x
    nodePackages.npm  # npm
    nodePackages.typescript  # TypeScript
    nodePackages.yarn  # Yarn (alternative to npm)
    nodePackages.tailwindcss  # Tailwind CSS
    nodePackages.postcss  # PostCSS (required by Tailwind)
    nodePackages.autoprefixer  # Autoprefixer (required by Tailwind)
  ];

  shellHook = ''
    export PATH="$PWD/node_modules/.bin:$PATH"
    echo "Node.js development environment loaded."
    echo "Run 'npm install' to install project dependencies."
  '';
}