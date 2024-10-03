import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = () => {
    const links = [ { name: 'Home',
        submenu:'true',
        sublink:[{
            Head:"",
            sublinks:[{name:"Home1", link:"/home" },
                {name:"Home2", link:"/home2"},
                {name:"Home3", link:"/home3"},
                {name:"Home4", link:"/home4"},
            ]
        }]
     },
        {
            name: 'Shop',
            submenu: true,
            sublink: [
                {
                    Head: "Shop Layout",
                    sublinks: [
                        { name: "Grid Left Sidbar", link: "/" },
                        { name: "Grid Right Sidbar", link: "/" },
                        { name: "Full Width", link: "/" },
                        { name: "List Left Sidbar", link: "/" },
                        { name: "List Right Sidbar", link: "/" }
                    ]
                },
                {
                    Head: "Shop Pages",
                    sublinks: [
                        { name: "Cart", link: "/" },
                        { name: "Empty Cart", link: "/" },
                        { name: "Wishlist", link: "/" },
                        { name: "Compare", link: "/" },
                        { name: "Checkout", link: "/" },
                        { name: "Login", link: "/" },
                        { name: "My Account", link: "/" }
                    ]
                },
                
                {
                    Head:"Product Single",
                    sublinks: [
                        { name: "Product  Default", link: "/" },
                        { name: "Product  Variable", link: "/" },
                        { name: "Product  Refreral", link: "/" },
                        { name: "Product Group", link: "/" },
                        { name: "Product Slider", link: "/" },
                        
                    ]
                },
                {
                    Head:"Product TYPE",
                    sublinks: [
                        { name: "Product Tab Left", link: "/" },
                        { name: "Product Tab Right", link: "/" },
                        { name: "Product Gallery Left", link: "/" },
                        { name: "Product Gallery Right", link: "/" },
                        { name: "Product Sticky Left", link: "/" },
                        { name: "Product Sticky Right", link: "/" }
                    ]
                }
            ]
        },
        { name: 'Blogs',
         submenu: 'true',
         sublink:[{
            Head:'',
            sublinks:[
                {name:"Blog Grid Sidbar Left", link:"/"},
                {name:"Blog Grid Sidbar right", link:"/"},
                {name:"Blog Full Width", link:"/"},
                {name:"Blog List Sidbar Left", link:"/"},
                {name:"Blog List Sidbar Right", link:"/"},
                {name:"Blog Single Sidbar Left", link:"/"},
                {name:"Blog Single Sidbar Right", link:"/"}
            ]
         }]
         },
        { name: 'Pages',
            submenu:'true',
            sublink:[{
                Head:"",
                sublinks:[{name:"Frequently Question", link:"/frequently"},
                    {name:"Privacy Policy", link:"/private"},
                    {name:"404 Page", link:"/notfound"},
                ]
            }]
         }
    ];

    return (
        <>
            {links.map((link, index) => (
                <>
                <div className='px-3 text-left md:cursor-pointer group' key={index}>
                    <h1 className='py-4 text-base font-medium hover:text-primary-Camel'>{link.name}</h1>
                    {link.submenu && (
                        <div>
                            <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                                <div className='py-3'>
                                    <div className='w-4 h-4 left-3 absolute mt-1 bg-primary-white rotate-45'></div>
                                </div>
                                <div className='bg-primary-white p-5 grid grid-cols-2  gap-10'>
                                    {link.sublink.map((mysublink, subIndex) => (
                                        <div key={subIndex}>
                                            <h1 className='text-lg font-semibold hover:text-primary-Camel'>{mysublink.Head}</h1>
                                            <ul>
                                                {mysublink.sublinks.map((slink, linkIndex) => (
                                                    <li className='text-sm text-gray-600 my-2.5' key={linkIndex}>
                                                        <Link to={slink.link} className="hover:text-primary-Camel transition-all duration-500 ease-in-out hover:pl-3">
                                                            {slink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            
                                        </div>
                                        
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                    )}
                </div>
               
               
              </>
            ))}
            
        </>
        
    );
}

export default NavLink;

