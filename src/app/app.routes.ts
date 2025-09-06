import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';
import { Carrers } from './carrers/carrers';
import { ContactUs } from '../contact-us/contact-us';
import { Notfound } from './Components/notfound/notfound';
import { UserList } from './Components/user-list/user-list';
import { ProductList } from './Components/product-list/product-list';
import { EmployeeCRUD } from './Components/employee-crud/employee-crud';
import { UserDetails } from './Component/user-details/user-details';
import { EmployeeList } from './Components/employee-list/employee-list';
import { EmployeeCURD } from './Components/employee-curd/employee-curd';
import { PermanentJobs } from './Component/permanent-jobs/permanent-jobs';
import { ContractJobs } from './Component/contract-jobs/contract-jobs';
import { UploadVideo } from './Components/upload-video/upload-video';

export const routes: Routes = [
    { path: 'home', component: Home},
    { path: 'aboutus', component: AboutUs},
    { 
        path: 'carrers', component: Carrers,
        children: [
            { path: '', component: PermanentJobs},
            { path: 'permanent', component: PermanentJobs},
            { path: 'contract', component: ContractJobs}
        ]
    },
    { path: 'contact-us', component: ContactUs},
    { path: 'users', component: UserList},
    { path: 'userdetails/:id', component: UserDetails },
    { path: 'products', component: ProductList},
    { path: 'uploadVideo', component: UploadVideo},
    { path: '', component: Home },
    { path: '**', component: Notfound },
];
