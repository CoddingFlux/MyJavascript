const obj={
    "name":"Renish Limbasiya",
    "age":21,
    "social":{
        "facebook":{
            "account":"renish.l090@gmail.com",
            "password":"123"
        },
        "instagram":{
            "account":
            {
                "personal":{
                    "account":"renish.l090@gmail.com",
                    "password":"123"
                },

                "business":{
                    "account":"renish.l090@gmail.com",
                    "password":"123456"
                }
            }
        }

    }
};

function makeDeepCopy(objasparam){

if(typeof(objasparam) !== 'object' || objasparam === null){
return objasparam;
}

const copiedval=Array.isArray(objasparam)?[]:{};
let keys=Object.keys(objasparam);

for(let i=0;i<keys.length;i++){
    copiedval[keys[i]]=makeDeepCopy(objasparam[keys[i]]);
}
return copiedval;
}

const copy=makeDeepCopy(obj);
// console.log(copy);
copy.social.instagram.account.personal.account="chang";
console.log(obj.social.instagram.account.personal.account)
console.log(copy.social.instagram.account.personal.account);

// console.log(obj.social.instagram.account.business);