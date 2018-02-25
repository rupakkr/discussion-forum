import { Meteor } from 'meteor/meteor';

import { Mongo } from 'meteor/mongo';

import { check } from 'meteor/check';

export const Comments = new Mongo.Collection('comments');

if(Meteor.isServer){
    Meteor.publish('comments', function commentsPublication() {
        return Comments.find();
    })
}

Meteor.methods({
    'comments.insert'(comm){
        check(comm, String);

        if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized');
        }

        Comments.insert({

            comm,

            createdAt: new Date,
            owner: Meteor.userId(),
            username: Meteor.user().username

        });
    }
});