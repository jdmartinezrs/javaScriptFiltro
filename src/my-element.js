import { LitElement, css, html} from 'lit'

import "./card.js"

export class MyMainElement extends LitElement{
    
        static styles = css`

        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');

        html {
            overflow-x: hidden;
          }
          
          body {
            background: var(--grey);
            overflow-x: hidden;
          }
          
          a {
            text-decoration: none;
          }
          
          li {
            list-style: none;
          }
        
        

        
        /* SIDEBAR */
        #sidebar {
            position: fixed;
            max-width: 260px;
            width: 100%;
            background: var(--light);
            top: 0;
            left: 0;
            height: 100%;
            overflow-y: auto;
            scrollbar-width: none;
            transition: all .3s ease;
            z-index: 200;
            overflow: scroll;
        }
        #sidebar.hide {
            max-width: 60px;
        }
        #sidebar.hide:hover {
            max-width: 260px;
        }
        #sidebar::-webkit-scrollbar {
            display: none;
        }
        #sidebar .brand {
            font-size: 24px;
            display: flex;
            align-items: center;
            height: 64px;
            font-weight: 700;
            color: var(--blue);
            position: sticky;
            top: 0;
            left: 0;
            z-index: 100;
            background: var(--light);
            transition: all .3s ease;
            padding: 0 6px;
        }
        #sidebar .icon {
            min-width: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 6px;
        }
        #sidebar .icon-right {
            margin-left: auto;
            transition: all .3s ease;
        }
        #sidebar .side-menu {
            margin: 36px 0;
            padding: 0 20px;
            transition: all .3s ease;
        }
        #sidebar.hide .side-menu {
            padding: 0 6px;
        }
        #sidebar.hide:hover .side-menu {
            padding: 0 20px;
        }
        #sidebar .side-menu a {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: var(--dark);
            padding: 12px 16px 12px 0;
            transition: all .3s ease;
            border-radius: 10px;
            margin: 4px 0;
            white-space: nowrap;
        }
        #sidebar .side-menu > li > a:hover {
            background: var(--grey);
        }
        #sidebar .side-menu > li > a.active .icon-right {
            transform: rotateZ(90deg);
        }
        #sidebar .side-menu > li > a.active,
        #sidebar .side-menu > li > a.active:hover {
            background: var(--blue);
            color: var(--light);
        }
        #sidebar .divider {
            margin-top: 24px;
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 700;
            color: var(--dark-grey);
            transition: all .3s ease;
            white-space: nowrap;
        }
        #sidebar.hide:hover .divider {
            text-align: left;
        }
        #sidebar.hide .divider {
            text-align: center;
        }
        #sidebar .side-dropdown {
            padding-left: 54px;
            max-height: 0;
            overflow-y: hidden;
            transition: all .15s ease;
        }
        #sidebar .side-dropdown.show {
            max-height: 1000px;
        }
        #sidebar .side-dropdown a:hover {
            color: var(--blue);
        }
        #sidebar .ads {
            width: 100%;
            padding: 20px;
        }
        #sidebar.hide .ads {
            display: none;
        }
        #sidebar.hide:hover .ads {
            display: block;
        }
        #sidebar .ads .wrapper {
            background: var(--grey);
            padding: 20px;
            border-radius: 10px;
        }
        #sidebar .btn-upgrade {
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 12px 0;
            color: var(--light);
            background: var(--blue);
            transition: all .3s ease;
            border-radius: 5px;
            font-weight: 600;
            margin-bottom: 12px;
        }
        #sidebar .btn-upgrade:hover {
            background: var(--dark-blue);
        }
        #sidebar .ads .wrapper p {
            font-size: 12px;
            color: var(--dark-grey);
            text-align: center;
        }
        #sidebar .ads .wrapper p span {
            font-weight: 700;
        }
        /* SIDEBAR */
    
        /* CONTENT */
        #content {
            position: relative;
            width: calc(100% - 260px);
            left: 260px;
            transition: all .3s ease;
        }
        #sidebar.hide + #content {
            width: calc(100% - 60px);
            left: 60px;
        }
        /* NAVBAR */
        nav {
            background: var(--light);
            height: 64px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            grid-gap: 28px;
            position: sticky;
            top: 0;
            left: 0;
            z-index: 100;
        }
        nav .toggle-sidebar {
            font-size: 18px;
            cursor: pointer;
        }
        nav form {
            max-width: 400px;
            width: 100%;
            margin-right: auto;
        }
        nav .form-group {
            position: relative;
        }
        nav .form-group input {
            width: 100%;
            background: var(--grey);
            border-radius: 5px;
            border: none;
            outline: none;
            padding: 10px 36px 10px 16px;
            transition: all .3s ease;
        }
        nav .form-group input:focus {
            box-shadow: 0 0 0 1px var(--blue), 0 0 0 4px var(--light-blue);
        }
        nav .form-group .icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 16px;
            color: var(--dark-grey);
        }
        nav .nav-link {
            position: relative;
        }
        nav .nav-link .icon {
            font-size: 18px;
            color: var(--dark);
        }
        nav .nav-link .badge {
            position: absolute;
            top: -12px;
            right: -12px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid var(--light);
            background: var(--red);
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--light);
            font-size: 10px;
            font-weight: 700;
        }
        nav .divider {
            width: 1px;
            background: var(--grey);
            height: 12px;
            display: block;
        }
        nav .profile {
            position: relative;
        }
        nav .profile img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            object-fit: cover;
            cursor: pointer;
        }
        nav .profile .profile-link {
            position: absolute;
            top: calc(100% + 10px);
            right: 0;
            background: var(--light);
            padding: 10px 0;
            box-shadow: 4px 4px 16px rgba(0, 0, 0, .1);
            border-radius: 10px;
            width: 160px;
            opacity: 0;
            pointer-events: none;
            transition: all .3s ease;
        }
        nav .profile .profile-link.show {
            opacity: 1;
            pointer-events: visible;
            top: 100%;
        }
        nav .profile .profile-link a {
            padding: 10px 16px;
            display: flex;
            grid-gap: 10px;
            font-size: 14px;
            color: var(--dark);
            align-items: center;
            transition: all .3s ease;
        }
        nav .profile .profile-link a:hover {
            background: var(--grey);
        }
        /* NAVBAR */
        
        
        
        /* MAIN */
        main {
            width: 100%;
            padding: 24px 20px 20px 20px;
        }
        main .title {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        main .breadcrumbs {
            display: flex;
            grid-gap: 6px;
        }
        main .breadcrumbs li,
        main .breadcrumbs li a {
            font-size: 14px;
        }
        main .breadcrumbs li a {
            color: var(--blue);
        }
        main .breadcrumbs li a.active,
        main .breadcrumbs li.divider {
            color: var(--dark-grey);
            pointer-events: none;
        }
        main .info-data {
            margin-top: 36px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            grid-gap: 20px;
        }
     
        main .data {
            display: flex;
            grid-gap: 20px;
            margin-top: 20px;
            flex-wrap: wrap;
        }
        main .data .content-data {
            flex-grow: 1;
            flex-basis: 400px;
            padding: 20px;
            background: var(--light);
            border-radius: 10px;
            box-shadow: 4px 4px 16px rgba(0, 0, 0, .1);
        }
        main .content-data .head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
        }
        main .content-data .head h3 {
            font-size: 20px;
            font-weight: 600;
        }
        main .content-data .head .menu {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        main .content-data .head .menu .icon {
            cursor: pointer;
        }
        main .content-data .head .menu-link {
            position: absolute;
            top: calc(100% + 10px);
            right: 0;
            width: 140px;
            background: var(--light);
            border-radius: 10px;
            box-shadow: 4px 4px 16px rgba(0, 0, 0, .1);
            padding: 10px 0;
            z-index: 100;
            opacity: 0;
            pointer-events: none;
            transition: all .3s ease;
        }
        main .content-data .head .menu-link.show {
            top: 100%;
            opacity: 1;
            pointer-events: visible;
        }
        main .content-data .head .menu-link a {
            display: block;
            padding: 6px 16px;
            font-size: 14px;
            color: var(--dark);
            transition: all .3s ease;
        }
        main .content-data .head .menu-link a:hover {
            background: var(--grey);
        }
        main .content-data .chart {
            width: 100%;
            max-width: 100%;
            overflow-x: auto;
            scrollbar-width: none;
        }
        main .content-data .chart::-webkit-scrollbar {
            display: none;
        }
        
        main .chat-box {
            width: 100%;
            max-height: 360px;
            overflow-y: auto;
            scrollbar-width: none;
        }
        main .chat-box::-webkit-scrollbar {
            display: none;
        }
        main .chat-box .day {
            text-align: center;
            margin-bottom: 10px;
        }
        main .chat-box .day span {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 20px;
            background: var(--light-blue);
            color: var(--blue);
            font-size: 12px;
            font-weight: 600;
        }
        main .chat-box .msg img {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            object-fit: cover;
        }
        main .chat-box .msg {
            display: flex;
            grid-gap: 6px;
            align-items: flex-start;
        }
        main .chat-box .profile .username {
            font-size: 14px;
            font-weight: 600;
            display: inline-block;
            margin-right: 6px;
        }
        main .chat-box .profile .time {
            font-size: 12px;
            color: var(--dark-grey);
        }
        main .chat-box .chat p {
            font-size: 14px;
            padding: 6px 10px;
            display: inline-block;
            max-width: 400px;
            line-height: 150%;
        }
        main .chat-box .msg:not(.me) .chat p {
            border-radius: 0 5px 5px 5px;
            background: var(--blue);
            color: var(--light);
        }
        main .chat-box .msg.me {
            justify-content: flex-end;
        }
        main .chat-box .msg.me .profile {
            text-align: right;
        }
        main .chat-box .msg.me p {
            background: var(--grey);
            border-radius: 5px 0 5px 5px;
        }
        main form {
            margin-top: 6px;
        }
        main .form-group {
            width: 100%;
            display: flex;
            grid-gap: 10px;
        }
        main .form-group input {
            flex-grow: 1;
            padding: 10px 16px;
            border-radius: 5px;
            outline: none;
            background: var(--grey);
            border: none;
            transition: all .3s ease;
            width: 100%;
        }
        main .form-group input:focus {
            box-shadow: 0 0 0 1px var(--blue), 0 0 0 4px var(--light-blue);
        }
        main .btn-send {
            padding: 0 16px;
            background: var(--blue);
            border-radius: 5px;
            color: var(--light);
            cursor: pointer;
            border: none;
            transition: all .3s ease;
        }
        main .btn-send:hover {
            background: var(--dark-blue);
        }
        /* MAIN */
        /* CONTENT */
        
        
        
        
        
        
        @media screen and (max-width: 768px) {
            #content {
                position: relative;
                width: calc(100% - 60px);
                transition: all .3s ease;
            }
            nav .nav-link,
            nav .divider {
                display: none;
            }
        }
        
        `;
        render(){
            return html`
        
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
                <link rel="stylesheet" href="style.css">
                <script src="main.js" async></script>
                <script src="app.js" defer type="module"></script>
                <title>AdminSite</title>
            </head>
            <body>
                <!-- SIDEBAR -->
                <section id="sidebar">
                    <a href="#" class="brand"><i class='bx bxs-smile icon'></i> AdminSite</a>
                    <ul class="side-menu">
                        <li><a href="#" class="active"><i class='bx bxs-dashboard icon' ></i> Dashboard</a></li>
                        <li class="divider" data-text="main">Main</li>
                        <li>
                            <a href="#"><i class='bx bxs-inbox icon' ></i> Elements <i class='bx bx-chevron-right icon-right' ></i></a>
                            <ul class="side-dropdown">
                                <li><a href="#">Alert</a></li>
                                <li><a href="#">Badges</a></li>
                                <li><a href="#">Breadcrumbs</a></li>
                                <li><a href="#">Button</a></li>
                            </ul>
                        </li>
                        <li><a href="#"><i class='bx bxs-chart icon' ></i> Charts</a></li>
                        <li><a href="#"><i class='bx bxs-widget icon' ></i> Widgets</a></li>
                        <li class="divider" data-text="table and forms">Table and forms</li>
                        <li><a href="#"><i class='bx bx-table icon' ></i> Tables</a></li>
                        <li>
                            <a href="#"><i class='bx bxs-notepad icon' ></i> Forms <i class='bx bx-chevron-right icon-right' ></i></a>
                            <ul class="side-dropdown">
                                <li><a href="#">Basic</a></li>
                                <li><a href="#">Select</a></li>
                                <li><a href="#">Checkbox</a></li>
                                <li><a href="#">Radio</a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <!-- SIDEBAR -->
            
                <!-- NAVBAR -->
                <section id="content">
                    <!-- NAVBAR -->
                    <nav>
                        <i class='bx bx-menu toggle-sidebar' ></i>
                        <form action="#">
                            
                        </form>
                        
                        <span class="divider"></span>
                        <div class="profile">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
                            <ul class="profile-link">
                                <li><a href="#"><i class='bx bxs-user-circle icon' ></i> Profile</a></li>
                                <li><a href="#"><i class='bx bxs-cog' ></i> Settings</a></li>
                                <li><a href="#"><i class='bx bxs-log-out-circle' ></i> Logout</a></li>
                            </ul>
                        </div>
                    </nav>
                    <!-- NAVBAR -->
            
                    <!-- MAIN -->
                    <main>
                        <h1 class="title">Dashboard</h1>
                        <ul class="breadcrumbs">
                            <li><a href="#">Home</a></li>
                            <li class="divider">/</li>
                            <li><a href="#" class="active">Dashboard</a></li>
                        </ul>
                        <div class="info-data">
                           <my-card></my-card>
                            <div class="card">
                                <div class="head">
                                    <div>
                                        <h2>465</h2>
                                        <p>Pageviews</p>
                                    </div>
                                    <i class='bx bx-trending-up icon' ></i>
                                </div>
                                <span class="progress" data-value="30%"></span>
                                <span class="label">30%</span>
                            </div>
                            <div class="card">
                                <div class="head">
                                    <div>
                                        <h2>235</h2>
                                        <p>Visitors</p>
                                    </div>
                                    <i class='bx bx-trending-up icon' ></i>
                                </div>
                                <span class="progress" data-value="80%"></span>
                                <span class="label">80%</span>
                            </div>
                        </div>
                        <div class="data">
                            <div class="content-data">
                                <div class="head">
                                    <h3>Sales Report</h3>
                                </div>
                                <!-- conteido -->
                                <h1>Hola Mundo</h1>
                            </div>
                        
                        </div>
                    </main>
                    <!-- MAIN -->
                </section>
                <!-- NAVBAR -->
            </body>
            </html>
          
        `;
}


}

customElements.define('my-element',MyMainElement)