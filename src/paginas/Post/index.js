import "./Post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "assets/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    if (!post) {
        return <NaoEncontrada />;
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route
                    index
                    element={
                        <PostModelo
                            FotoCapa={`/assets/posts/${post.id}/capa.png`}
                            titulo={post.titulo}
                        >
                            <div className="post-markdown-container">
                                <ReactMarkdown>{post.texto}</ReactMarkdown>
                            </div>
                        </PostModelo>
                    }
                />
            </Route>
        </Routes>
    );
}
