import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: '¡Toda nuestra ropa!',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Mujer',
          route: '/mujer',
          children: [
            { label: 'Abrigos', route: '/mujer/abrigos' },
            { label: 'Accesorios', route: '/mujer/accesorios' },
            { label: 'Bañadores y Bikinis', route: '/mujer/bañadores_bikinis' },
            { label: 'Calzado', route: '/mujer/calzado' },
            { label: 'Camisetas', route: '/mujer/camisetas' },
            { label: 'Chaquetas', route: '/mujer/chaquetas' },
            { label: 'Pantalones', route: '/mujer/pantalones' },
            { label: 'Sudaderas', route: '/mujer/sudaderas' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Hombre',
          route: '/hombres',
          children: [
            { label: 'calzado', route: '/hombres/calzado' },
            { label: 'camisetas', route: '/hombres/camisetas' },
            { label: 'chaquetas', route: '/hombres/chaquetas' },
            { label: 'pantalones', route: '/hombres/pantalones' },
            { label: 'sudaderas', route: '/hombres/sudaderas' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Autenticación',
          route: '/auth',
          children: [
            { label: 'Registrarse', route: '/auth/sign-up' },
            { label: 'Iniciar sesión', route: '/auth/sign-in' },
            { label: 'Olvidé la contraseña', route: '/auth/forgot-password' },
            { label: 'Nueva contraseña', route: '/auth/new-password' },
            { label: 'Verificación en dos pasos', route: '/auth/two-steps' },
          ],
        },
        {
          label: 'Cesta',
          route: '/cesta',
        },
      ],
    },
    {
      group: 'Marcas',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/download.svg',
          label: 'Nike',
          route: '/download',
        },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'Adidas',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Puma',
          route: '/users',
        },
      ],
    },
    {
      group: 'Configuración',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Ajustes',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notificaciones',
          route: '/notifications',
        },
        // Comenté las líneas que parecen estar incompletas o incorrectas
        // {
        //   icon: 'assets/icons/heroicons/outline/folder.svg',
        //   label: 'Carpetas',
        //   route: '/folders',
        //   children: [
        //     { label: 'Current Files', route: '/folders/current-files' },
        //     { label: 'Downloads', route: '/folders/download' },
        //     { label: 'Trash', route: '/folders/trash' },
        //   ],
        // },
      ],
    },
  ];
}
