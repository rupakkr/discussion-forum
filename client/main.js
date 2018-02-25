import angular from 'angular';
import angularMeteor from 'angular-meteor';
import comments from '../imports/components/discussionBoard/discussionBoard';
import '../imports/startup/accounts-config.js';

angular.module('forum', [
    angularMeteor,
    comments.name,
    'accounts.ui'
]);

