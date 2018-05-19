var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'http://1.fwcdn.pl/po/05/71/30571/7529392.3.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
    },
    {
        id: 3,
        title: 'W głowie się nie mieści',
        desc: 'Film o emocjach',
        img: 'http://1.fwcdn.pl/po/21/70/682170/7692393.3.jpg'
    },
    {
        id: 4,
        title: 'Zakochany kundel',
        desc: 'Film o miłości',
        img: 'http://1.fwcdn.pl/po/36/44/93644/7425705.3.jpg'
    },
    {
        id: 5,
        title: 'Piękna i bestia',
        desc: 'Film o miłości',
        img: 'http://1.fwcdn.pl/po/13/66/31366/7428542.3.jpg'
    }
];

var MovieTitle = React.createClass({
    propTypes: {
        movieTitle: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('h2', {}, this.props.movieTitle)
        )
    },
});

var MovieDescription = React.createClass({
    propTypes: {
        movieDescription: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('p', {}, this.props.movieDescription)
        )
    },
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {movieTitle: this.props.movie.title}),
                React.createElement(MovieDescription, {movieDescription: this.props.movie.desc}),
                React.createElement('img', {src: this.props.movie.img})
            )
        )
    },
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },

    renderMovies: function() {
        return this.props.movies.map(function(movie) {
            return React.createElement(Movie, {key: movie.id, movie: movie});
        });
    },

    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, this.renderMovies())
            )
        )
    },
});

var element = React.createElement(MoviesList, {movies: movies});

ReactDOM.render(element, document.getElementById('app'));