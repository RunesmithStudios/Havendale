import angular from 'angular'

export default
function HomeCtrl($scope, $document)
{
    $scope.navbarContent = {
        banner: 'home',
        links: [
            //link          name
            ['about',       'About'     ],
            ['schedule',    'Schedule'  ],
            ['gaming',      'Gaming'    ],
            ['podcast',     'Podcast'   ],
            ['contact',     'contact'   ]
        ]
    }

    $scope.centerImg = "static/img/gaming.logo.png"

    $scope.portfolio = {
        cols: [0,1,2],
        boxes: [
            "potato",
            "abacate",
            "fantástico"
        ]
    }

    $scope.showPortfolio = (target) => {
        let portfolio = angular.element(document.querySelect('#portfolio'))

        portfolio.addClass(target)
    }
}

HomeCtrl.$inject = ['$scope', '$document']
