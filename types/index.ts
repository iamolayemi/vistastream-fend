export interface IFixture {
    id: number
    competition: string | object
    home_team: {
        name: string
        badge?: string
    }
    away_team: {
        name: string
        badge?: string
    }
    stream_source: string
    streaming_at: Date
}

export interface IArticle {
    id: number
    title: string
    body: string
    thumbnail?: string
    slug: string
    published_at: Date
}

export interface IEvent {
    id: string
    sport: string
    league: string
    home_team: {
        name: string
        badge: string
    }
    away_team: {
        name: string
        badge: string
    }
    score: {
        home_team: number | string
        away_team: number | string
    }
    info: {
        status: string
        progress: string
        time: string
        date: Date
        last_update: Date
    }
}

export interface IAdvert {
    placement: string
    code: string
}
