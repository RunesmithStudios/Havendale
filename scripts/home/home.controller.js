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
}

HomeCtrl.$inject = ['$scope', '$document']
