import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Comments } from "../../api/comments";
import template from './discussionBoard.html';


class CommentsCtrl{
    constructor($scope){
        $scope.viewModel(this);

        this.subscribe('comments');

        this.helpers({
            comments(){
                return Comments.find({}, {
                    sort: {
                        createdAt: -1
                    }
                });
            },
            currentUser() {

                return Meteor.user();

            }
        })
    }

    addComment(newComment) {

        // Insert a task into the collection

        Meteor.call('comments.insert', newComment);



        // Clear form

        this.newComment = '';

    }
}


export default angular.module('comments', [
    angularMeteor
])
    .component('comments', {
        templateUrl: 'imports/components/discussionBoard/discussionBoard.html',
        controller: ['$scope',CommentsCtrl]
    });