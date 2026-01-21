import { Header } from "../components/Header";
import './NotFoundPage.css';

export function NotFoundPage(){
    return(
        <>
            <Header/>
                <div className="not-found-page-container">
                    <h1 className="not-found-page">Page not found</h1>
                </div>
        </>
    );
}