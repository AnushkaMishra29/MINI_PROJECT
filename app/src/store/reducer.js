import * as actionTypes from './action';
const initialState=
{
    loader:false,
    goveSchools:[
       {
            name:'School',
            image:'/assets/images.png',
            address:'JAIN KUNJ NAGAR COLONY KHATAULI',
            location:'Khatauli',
        description:'loranipsun hkjnsdc kjnkjdsnc c sdkjcnsdkjc  sdkjcnsdkjc  sdkcndskjc skdjcn welkfnrwoe'

       },
       {
        name:'School',
        image:'/assets/images.png',
        address:'JAIN KUNJ NAGAR COLONY KHATAULI',
        location:'Meerut',
        description:'loranipsun hkjnsdc kjnkjdsnc c sdkjcnsdkjc  sdkjcnsdkjc  sdkcndskjc skdjcn welkfnrwoe'
       },
       {
        name:'School',
        image:'/assets/images.png',
        address:'JAIN KUNJ NAGAR COLONY KHATAULI',
        location:'Khatauli',
        description:'loranipsun hkjnsdc kjnkjdsnc c sdkjcnsdkjc  sdkjcnsdkjc  sdkcndskjc skdjcn welkfnrwoe'
       },
       {
        name:'School',
        image:'/assets/images.png',
        address:'JAIN KUNJ NAGAR COLONY KHATAULI',
        location:'Muzaffarnager',
        description:'loranipsun hkjnsdc kjnkjdsnc c sdkjcnsdkjc  sdkjcnsdkjc  sdkcndskjc skdjcn welkfnrwoe'
       },
       {
        name:'School',
        image:'/assets/images.png',
        address:'JAIN KUNJ NAGAR COLONY KHATAULI',
        location:'Muzaffarnager',
        description:'loranipsun hkjnsdc kjnkjdsnc c sdkjcnsdkjc  sdkjcnsdkjc  sdkcndskjc skdjcn welkfnrwoe'
       },
       {
        name:'School',
        image:'/assets/images.png',
        address:'JAIN KUNJ NAGAR COLONY KHATAULI',
        location:'Muzaffarnager',
        description:'loranipsun hkjnsdc kjnkjdsnc c sdkjcnsdkjc  sdkjcnsdkjc  sdkcndskjc skdjcn welkfnrwoe'
       },{
        name:'School',
        image:'/assets/images.png',
        address:'JAIN KUNJ NAGAR COLONY KHATAULI',
        location:'Muzaffarnager',
        description:'loranipsun hkjnsdc kjnkjdsnc c sdkjcnsdkjc  sdkjcnsdkjc  sdkcndskjc skdjcn welkfnrwoe'
       },{
        name:'School',
        image:'/assets/images.png',
        address:'JAIN KUNJ NAGAR COLONY KHATAULI',
        location:'Muzaffarnager',
        description:'loranipsun hkjnsdc kjnkjdsnc c sdkjcnsdkjc  sdkjcnsdkjc  sdkcndskjc skdjcn welkfnrwoe'
       },{
        name:'School',
        image:'/assets/images.png',
        address:'JAIN KUNJ NAGAR COLONY KHATAULI',
        location:'Muzaffarnager',
        description:'loranipsun hkjnsdc kjnkjdsnc c sdkjcnsdkjc  sdkjcnsdkjc  sdkcndskjc skdjcn welkfnrwoe'
       },
       {
        name:'School',
        image:'/assets/images.png',
        address:'JAIN KUNJ NAGAR COLONY KHATAULI',
        location:'Muzaffarnager',
        description:'loranipsun hkjnsdc kjnkjdsnc c sdkjcnsdkjc  sdkjcnsdkjc  sdkcndskjc skdjcn welkfnrwoe'
       }
    ]
}
const reducer =(state=initialState,action)=>
    {
        switch(action.type)
        {   
            case actionTypes.CHANGE_LOADER:
                console.log('sdj');
                return {
                    ...state,
                    loader:!state.loader
                }
              
            case actionTypes.SCHOOLS:
                return {
                    ...state,
                    goveSchools:state.goveSchools
                    
                }  
            default:
                return state;     
        }   
    }
export default reducer