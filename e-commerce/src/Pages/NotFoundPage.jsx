import { Header } from "../components/Header";
import './NotFoundPage.css';

export function NotFoundPage({ cart }){
    return(
        <>
        <title>404 Page Not Found</title>
            <Header cart={cart}/>
                <div className="not-found-page-container">
                    <h1 className="not-found-page">Page not found</h1>
                </div>
        </>
    );
}