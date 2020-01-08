// Import Vue for vue-logger
// import Vue from 'vue';
// Import Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Import Firebase Config
// import configData from "../firebase.js";
// firebase.initializeApp(configData);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

export default {

    async uploadImage(file) {

        // Create the file metadata
        // 업로드할 파일의 속성을 정의할 수 있습니다.
        // 아래와 같이 설정할 경우 업로드되는 모든 사진파일은 jpeg 확장자를 가지게 됩니다.
        // 또 customMetadata 키워드를 이용하여서 원하는 데이터를 입력할 수 있습니다.
        var metadata = {
            contentType: 'image/jpeg',
            customMetadata: {
                author: 'taylous'
            }
        };
        // Upload file and metadata to the object 'images/example.jpg'
        // 디렉토리가 존재하지 않는다면 새로 만들어서 저장하게 됩니다.
        var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
        
        // Listen for state changes, errors, and completion of the upload.
        // 업로드 되는 과정을 확인할 수 있습니다.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                // 전송된 데이터와 총 데이터의 양을 비교하여서 현재 진행상황을 알 수 있습니다.
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                }
            }, function(error) {
            
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
            
                case 'storage/canceled':
                    // User canceled the upload
                    break;
            
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                }
            }, function() {
                // Upload completed successfully, now we can get the download URL
                // 업로드가 마무리 되면 파일의 경로가 나오게 되는데 해당 정보를 firestore에 저장해서
                // 사용할 수 있도록 해야 합니다.
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('File available at', downloadURL);
                });
            });
    },

    async downloadImage() {

    }
};
