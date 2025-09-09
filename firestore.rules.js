rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Cho phép đọc cho tất cả user đã đăng nhập
    // Chỉ cho phép ghi đối với admin
    match /shifts/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && isAdmin();
    }
    
    // Quyền truy cập cho danh sách nhân viên
    match /employees/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && isAdmin();
    }
    
    // Quyền truy cập cho cài đặt
    match /settings/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && isAdmin();
    }
    
    // Hàm kiểm tra quyền admin
    function isAdmin() {
      return request.auth.token.email.matches('.*@company\\.com$');
    }
  }
}