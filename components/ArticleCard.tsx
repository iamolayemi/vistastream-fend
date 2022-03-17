import { IArticle } from '../types'
import Image from 'next/image'
import { parseArticleDate } from '../lib/common'

interface IProps {
    article: IArticle
}

const createExcerpt = (text: string) => {
    // strip html tags
    let excerpt = text.replace(/(<([^>]+)>)/gi, '')

    // check text length
    if (excerpt.length > 200) {
        excerpt = excerpt.substring(0, 200) + '...'
    }

    return excerpt
}


const ArticleCard = ({ article }: IProps) => {
    const excerpt = createExcerpt(article.body)

    const { day, month,year} = parseArticleDate(article.published_at)

    return (
        <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="single-blog">
                <div className="part-img">
                    {article.thumbnail && (
                        <>
                            <Image
                                src={article.thumbnail}
                                alt="article-image"
                                layout="fill"
                            />
                            <a href={`/articles/${article.slug}`}>
                                <i className="far fa-eye"></i>
                            </a>
                        </>
                    )}
                    <div className="post-date">
                        <span className="month">{day}</span>
                        <span className="month">{month}</span>
                        <span className="date">{year}</span>
                    </div>
                </div>

                <div className="part-text">
                    <a
                        href={`/articles/${article.slug}`}
                        className="title">
                        {article.title}
                    </a>
                    <p>{excerpt}</p>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard
