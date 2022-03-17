import ArticleCard from './ArticleCard'
import { useFetch } from '../lib/hooks'
import { IArticle } from '../types'
import { useEffect, useState } from 'react'
import LoadingSpinner from './Loading'

const ArticleList = () => {
    const [pageIndex, setPageIndex] = useState(0)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [pageIndex])

    let endpoint = '/api/articles'
    if (pageIndex !== 0) {
        endpoint = `/api/articles?page=${pageIndex}`
    }
    const { result } = useFetch(endpoint)

    if (!result) {
        return <LoadingSpinner />
    }

    const articles: IArticle[] = result.data

    return (
        <div className="blog blog-page">
            <div className="container">
                <div className="row">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
                {articles.length === 0 && (
                    <div className="row justify-content-center text-center">
                        <h4>
                            No articles at the moment, please check back later
                        </h4>
                    </div>
                )}

                {result.meta.last_page > 1 && (
                    <div className="bettix-pagination">
                        <ul>
                            {result.meta.current_page > 1 && (
                                <li>
                                    <a
                                        onClick={() =>
                                            setPageIndex(
                                                result.meta.current_page - 1
                                            )
                                        }>
                                        <i className="fas fa-chevron-left"></i>
                                    </a>
                                </li>
                            )}

                            {result.meta.last_page !== pageIndex && (
                                <li>
                                    <a
                                        onClick={() =>
                                            setPageIndex(
                                                result.meta.current_page + 1
                                            )
                                        }>
                                        <i className="fas fa-chevron-right"></i>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ArticleList
