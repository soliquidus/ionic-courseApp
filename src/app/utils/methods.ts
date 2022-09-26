import {Router} from '@angular/router';


export const redirectTo = (uri: string, router: Router) => {
  router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    router.navigate([uri]));
};
