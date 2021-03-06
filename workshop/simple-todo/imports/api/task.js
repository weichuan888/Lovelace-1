import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

if(Meteor.isServer){
    Meteor.publish('tasks', function taskPublication(){
        return Tasks.find();
    })
    
    Meteor.methods({
        'tasks.insert'(text){
            check(text, String);
            if(!this.userId){
                throw new Meteor.Error('not-authorized');
            }
            Tasks.insert({
                text : text, 
                createdAt: new Date(),
                owner: this.userId,
                username: Meteor.users.findOne(this.userId).emails[0].address,
            });
        },
        'tasks.remove'(taskId){
            check(taskId, String);
            Tasks.remove(taskId);
        }
    });
}