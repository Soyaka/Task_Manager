


export interface User {
    id: string;
    name: string;
    createdAt: string; // Assuming you want to use ISO string representation for time
    login: string;
    pwd: string;
    role: string;
    sessions: Session[];
  }
  
  export interface Task {
    id: string;
    title: string;
    desc: string;
    status: string;
    createdAt: string; // Assuming you want to use ISO string representation for time
    finishedAt: string; // Assuming you want to use ISO string representation for time
    deletedAt: string; // Assuming you want to use ISO string representation for time
    updatedAt: string; // Assuming you want to use ISO string representation for time
    label: string;
    userID: string;
    user: User;
  }

  export interface Session{



  }

