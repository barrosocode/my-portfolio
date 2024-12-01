// Imports
import Image from "next/image";

interface CircleImageProps {
    image: string; // Define que a prop `image` deve ser uma string
}

// Component
const CircleImage = ({image}: CircleImageProps) => {
    return (
        <Image
            src={image}
            alt="Circular example"
            width={200} // Largura da imagem
            height={200} // Altura da imagem
            style={{
                borderRadius: "50%", // Torna a imagem circular
                objectFit: "cover", // Ajusta a imagem ao contêiner
                border: "2px solid #ccc", // Opcional: Adiciona uma borda
                maxWidth: "100%", // Responsividade
                height: "auto", // Mantém a proporção
            }}
        />
    );
};

// Export
export default CircleImage;
