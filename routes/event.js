var data = require('../data.json')

exports.viewEvent = function(req,res){
    var info = {
        "name": req.params.name,
        "session": findEvent(req.params.name, data.sessions),
        "time": req.params.time,
        "url": data.url
    }
    res.render('event', info);
}

exports.viewEventAlt = function(req,res){
    var info = {
        "name": req.params.name,
        "session": findEvent(req.params.name, data.sessions),
        "time": req.params.time,
        "url": data.url
    }
    res.render('event-alt', info);
}

function findEvent(name, array){
    for(var i = 0; i < array.length; i++){
        if(array[i].name === name){
            return array[i];
        }
    }
}

function startSession(e){
    e.preventDefault();
    console.log('clicked');
    $('.header-pad').attr("color","#ff6464");

}
