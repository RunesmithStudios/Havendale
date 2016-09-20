import angular from 'angular'

export default
function HomeCtrl($scope, $document)
{
    $document.on('scroll', () => {

        if($document.scrollTop() >= 51)
        {
            let navbar = angular.element('.mainNav')
            if(! navbar.hasClass('affix')) navbar.addClass('affix')
        }
    })
}

HomeCtrl.$inject = ['$scope', '$document']
