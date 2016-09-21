import angular from 'angular'

export default
function HomeCtrl($scope, $document)
{
    $document.on('scroll', () => {

        if($document.scrollTop() >= 51)
        {
            let navbar = angular.element('.navbar')
            if(! navbar.hasClass('affix')) navbar.addClass('affix')
        } else {
            let navbar = angular.element('.navbar')
            if(navbar.hasClass('affix')) navbar.removeClass('affix')
        }
    })

    $scope.navbarContent = {
        banner: 'home',
        links: [
            ['about',       'About'     ],
            ['schedule',    'Schedule'  ],
            ['gaming',      'Gaming'    ],
            ['podcast',     'Podcast'   ],
            ['contact',     'contact'   ]
        ]
    }
}

HomeCtrl.$inject = ['$scope', '$document']
