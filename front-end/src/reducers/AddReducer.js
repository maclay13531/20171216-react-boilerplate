export default function(state = [], action){
	if(action.type === "ADD_ACTION"){
		return action
	}else{
		return state;
	}
}