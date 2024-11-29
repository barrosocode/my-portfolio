// Imports
import Image from "next/image";

// Component
const CircleImage = () => {
    return (
        <Image
            src="/profile.png" // Caminho relativo à pasta public
            alt="Circular example"
            width={200} // Defina a largura da imagem
            height={200} // Defina a altura da imagem
            style={{
                borderRadius: "50%", // Torna a imagem circular
                objectFit: "cover", // Garante que a imagem se ajuste ao contêiner
                border: "2px solid #ccc", // Opcional: Adiciona uma borda
                maxWidth: "100%", // Para tornar responsivo
                height: "auto", // Para manter a proporção
            }}
        />
    );
};

// Export
export default CircleImage;
