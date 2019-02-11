import { Component , ViewChild} from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    
    //Para poder agregar la navegacion aca
    @ViewChild(Nav) nav: Nav;
    rootPage:any = 'LoginPage';

    //Arreglo con las paginas y titulos y nombre del componente para usar en el menu
    pages: Array<{title:string,component:any}>;


    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    
        this.pages = [
            {title:"Home",component:"HomePage"},
            {title:"About",component:"AboutPage"},
            {title:"Profile",component:"ProfilePage"}
        ];
    }

    openPage(page){
        //Abro una pagina nueva establecida como root
        this.nav.setRoot(page);
    }
}

