import {
  Component
} from '@angular/core';
import {
  Users
} from 'src/app/models/users';
import {
  UserserviceService
} from 'src/app/services/userservice.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent {
  constructor(private userService: UserserviceService) {}

  // Crear objeto que se evniara a al api
  datos: Users = {id: '', name: '', username: '',email: ''};

  onSubmit() {
    this.userService.postUser(this.datos).subscribe(
      (usuario: Users) => console.log(usuario)
    );
  }
}
