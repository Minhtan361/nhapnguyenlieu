rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Cho phép đọc cho tất cả user
    match /shifts/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Chỉ admin mới có quyền quản lý nhân viên và cài đặt
    match /employees/{document} {
      allow read: if true;
      allow write: if request.auth != null 
        && request.auth.token.email.matches('.*@company\\.com$');
    }
    
    match /settings/{document} {
      allow read: if true;
      allow write: if request.auth != null 
        && request.auth.token.email.matches('.*@company\\.com$');
    }
  }
}