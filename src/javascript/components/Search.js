var React   = require('react');
var Router  = require('react-router');
var Results = require('./Search/Results');

var Search = React.createClass({
  getInitialState: function() {
    return {
      videos: {
        "kind": "youtube#searchListResponse",
        "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/487dy6_BuuP4qIK97y4MgXCl7eI\"",
        "nextPageToken": "CAQQAA",
        "regionCode": "BR",
        "pageInfo": {
        "totalResults": 111,
        "resultsPerPage": 4
        },
        "items": [
        {
        "kind": "youtube#searchResult",
        "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/Qvy4BjE7w1u3uukzgqqPEJZqAas\"",
        "id": {
        "kind": "youtube#video",
        "videoId": "UOy5QmaumqM"
        },
        "snippet": {
        "publishedAt": "2015-11-25T19:38:42.000Z",
        "channelId": "UC8GoAzCU5Gpiys30veuAtmg",
        "title": "Murilo Gun: Comedy Thinking",
        "description": "",
        "thumbnails": {
        "default": {
        "url": "https://i.ytimg.com/vi/UOy5QmaumqM/default.jpg",
        "width": 120,
        "height": 90
        },
        "medium": {
        "url": "https://i.ytimg.com/vi/UOy5QmaumqM/mqdefault.jpg",
        "width": 320,
        "height": 180
        },
        "high": {
        "url": "https://i.ytimg.com/vi/UOy5QmaumqM/hqdefault.jpg",
        "width": 480,
        "height": 360
        }
        },
        "channelTitle": "VAGAS .com",
        "liveBroadcastContent": "none"
        }
        },
        {
        "kind": "youtube#searchResult",
        "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/v-HjL4Wm8fROMU0nS5p0j8kkVW0\"",
        "id": {
        "kind": "youtube#video",
        "videoId": "wK0DR4FuTqw"
        },
        "snippet": {
        "publishedAt": "2014-08-18T12:51:53.000Z",
        "channelId": "UC8GoAzCU5Gpiys30veuAtmg",
        "title": "Conheça o Mapa VAGAS de Carreiras",
        "description": "Já imaginou navegar por mais de 6 mil cargos, milhões de carreiras e incontáveis conexões? Agora tudo isso é possível. Com o Mapa VAGAS de Carreiras ...",
        "thumbnails": {
        "default": {
        "url": "https://i.ytimg.com/vi/wK0DR4FuTqw/default.jpg",
        "width": 120,
        "height": 90
        },
        "medium": {
        "url": "https://i.ytimg.com/vi/wK0DR4FuTqw/mqdefault.jpg",
        "width": 320,
        "height": 180
        },
        "high": {
        "url": "https://i.ytimg.com/vi/wK0DR4FuTqw/hqdefault.jpg",
        "width": 480,
        "height": 360
        }
        },
        "channelTitle": "VAGAS .com",
        "liveBroadcastContent": "none"
        }
        },
        {
        "kind": "youtube#searchResult",
        "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/tr5vRMq_peUJHmZW_5eRiMbBgRE\"",
        "id": {
        "kind": "youtube#video",
        "videoId": "Rx24lo9fF6o"
        },
        "snippet": {
        "publishedAt": "2010-06-28T14:14:37.000Z",
        "channelId": "UC8GoAzCU5Gpiys30veuAtmg",
        "title": "Webcasts IT Web (Parte 01) - O novo padrão de currículo no recrutamento online",
        "description": "Na primeira parte do webcast sobre carreira com Roberta Prescott, editora do IT Web, falamos sobre o impacto do recrutamento online na busca de um novo ...",
        "thumbnails": {
        "default": {
        "url": "https://i.ytimg.com/vi/Rx24lo9fF6o/default.jpg",
        "width": 120,
        "height": 90
        },
        "medium": {
        "url": "https://i.ytimg.com/vi/Rx24lo9fF6o/mqdefault.jpg",
        "width": 320,
        "height": 180
        },
        "high": {
        "url": "https://i.ytimg.com/vi/Rx24lo9fF6o/hqdefault.jpg",
        "width": 480,
        "height": 360
        }
        },
        "channelTitle": "VAGAS .com",
        "liveBroadcastContent": "none"
        }
        },
        {
        "kind": "youtube#searchResult",
        "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/HUY4kHvqMxBzy5rFTIYOJzErFuM\"",
        "id": {
        "kind": "youtube#video",
        "videoId": "nAbqlW4cNbw"
        },
        "snippet": {
        "publishedAt": "2015-11-25T13:13:00.000Z",
        "channelId": "UC8GoAzCU5Gpiys30veuAtmg",
        "title": "Geraldo Rufino: o catador de sonhos",
        "description": "",
        "thumbnails": {
        "default": {
        "url": "https://i.ytimg.com/vi/nAbqlW4cNbw/default.jpg",
        "width": 120,
        "height": 90
        },
        "medium": {
        "url": "https://i.ytimg.com/vi/nAbqlW4cNbw/mqdefault.jpg",
        "width": 320,
        "height": 180
        },
        "high": {
        "url": "https://i.ytimg.com/vi/nAbqlW4cNbw/hqdefault.jpg",
        "width": 480,
        "height": 360
        }
        },
        "channelTitle": "VAGAS .com",
        "liveBroadcastContent": "none"
        }
        }
        ]
        }
    }
  },
  render: function() {
    console.log(this.props.params.term)
    render: {
      return (
        <div>
          <h2 className="fi-headline">Resultados para: "{this.props.params.term}"</h2>
          <Results term={this.props.params.term} videos={this.state.videos}/>
        </div>
      );
    }
  }
});

module.exports = Search;
