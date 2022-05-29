export default function UpcomingEvents({ events }) {
    return (
        <div className="py-3">
            <h1 className="text-uppercase">Próximos Eventos</h1>
            {events.map((event, index) =>
                <Event key={index} event={event} />
            )}
        </div>
    )
}

function Event({ event }) {
    return (
        <div className="card mt-5" style={{ backgroundColor: 'rgb(23, 23, 32)' }}>
            <div className="card-body">
                <h2 className="pb-3">
                    <span className="text-uppercase">{event.name}</span>
                    {' '}
                    <a href={"https://instagram.com/" + event.instagram} className="text-decoration-none text-white" target="_blank">
                        <span class="fs-5 text-secondary"><span class="text-danger">@</span>{event.instagram}</span>
                    </a>
                </h2>

                <div className="fs-6 mb-3">
                    <i class="bi bi-calendar-event text-danger"></i>
                    <span class="ms-3 text-uppercase">{event.date}</span>
                </div>

                <div className="fs-6 mb-3">
                    <i class="bi bi-geo-alt-fill text-danger"></i>
                    <span className="ms-3">{event.address}</span>
                </div>

                <div className="mb-3">
                    <span className="text-secondary">{event.description}</span>
                </div>

                <a href={event.more} className="btn btn-sm btn-danger">
                    <span className="ms-1 align-middle text-uppercase">Saiba mais</span>
                </a>
            </div>
        </div>
    )
}