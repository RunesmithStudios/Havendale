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

    $scope.potato = "blabla"
}

HomeCtrl.$inject = ['$scope', '$document']
