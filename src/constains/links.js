export const G_ADMIN_LINKS = [
    { text: "Заявки в обработке", route: "/registry/1/1", icon: () => <svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.71961 0.986328V3.84608H0.859863V33.8734H30.8872V9.56557H19.4482V3.84608H16.5885V0.986328H3.71961ZM5.14948 2.4162H15.1586V5.27595H18.0183V32.4435H11.5839V27.439H8.72417V32.4435H2.28974V5.27595H5.14948V2.4162ZM5.14948 6.70582V8.1357H6.57936V6.70582H5.14948ZM8.00923 6.70582V8.1357H9.4391V6.70582H8.00923ZM10.869 6.70582V8.1357H12.2989V6.70582H10.869ZM13.7287 6.70582V8.1357H15.1586V6.70582H13.7287ZM5.14948 10.2805V13.1403H6.57936V10.2805H5.14948ZM8.00923 10.2805V13.1403H9.4391V10.2805H8.00923ZM10.869 10.2805V13.1403H12.2989V10.2805H10.869ZM13.7287 10.2805V13.1403H15.1586V10.2805H13.7287ZM19.4482 10.9954H29.4573V32.4435H19.4482V10.9954ZM20.8781 12.4253V13.8552H22.308V12.4253H20.8781ZM23.7378 12.4253V13.8552H25.1677V12.4253H23.7378ZM26.5976 12.4253V13.8552H28.0275V12.4253H26.5976ZM5.14948 14.5701V17.4299H6.57936V14.5701H5.14948ZM8.00923 14.5701V17.4299H9.4391V14.5701H8.00923ZM10.869 14.5701V17.4299H12.2989V14.5701H10.869ZM13.7287 14.5701V17.4299H15.1586V14.5701H13.7287ZM20.8781 15.2851V16.7149H22.308V15.2851H20.8781ZM23.7378 15.2851V16.7149H25.1677V15.2851H23.7378ZM26.5976 15.2851V16.7149H28.0275V15.2851H26.5976ZM20.8781 18.1448V19.5747H22.308V18.1448H20.8781ZM23.7378 18.1448V19.5747H25.1677V18.1448H23.7378ZM26.5976 18.1448V19.5747H28.0275V18.1448H26.5976ZM5.14948 18.8597V21.7195H6.57936V18.8597H5.14948ZM8.00923 18.8597V21.7195H9.4391V18.8597H8.00923ZM10.869 18.8597V21.7195H12.2989V18.8597H10.869ZM13.7287 18.8597V21.7195H15.1586V18.8597H13.7287ZM20.8781 21.0046V22.4344H22.308V21.0046H20.8781ZM23.7378 21.0046V22.4344H25.1677V21.0046H23.7378ZM26.5976 21.0046V22.4344H28.0275V21.0046H26.5976ZM5.14948 23.1494V26.0091H6.57936V23.1494H5.14948ZM8.00923 23.1494V26.0091H9.4391V23.1494H8.00923ZM10.869 23.1494V26.0091H12.2989V23.1494H10.869ZM13.7287 23.1494V26.0091H15.1586V23.1494H13.7287ZM20.8781 23.8643V25.2942H22.308V23.8643H20.8781ZM23.7378 23.8643V25.2942H25.1677V23.8643H23.7378ZM26.5976 23.8643V25.2942H28.0275V23.8643H26.5976ZM20.8781 26.7241V28.1539H22.308V26.7241H20.8781ZM23.7378 26.7241V28.1539H25.1677V26.7241H23.7378ZM26.5976 26.7241V28.1539H28.0275V26.7241H26.5976ZM5.14948 27.439V31.0137H6.57936V27.439H5.14948ZM13.7287 27.439V31.0137H15.1586V27.439H13.7287ZM20.8781 29.5838V31.0137H22.308V29.5838H20.8781ZM23.7378 29.5838V31.0137H25.1677V29.5838H23.7378ZM26.5976 29.5838V31.0137H28.0275V29.5838H26.5976Z" fill="#0050B2" /></svg> },
    { text: "На рассмотрении", route: "/registry/2/1", icon: () => <svg width="16" height="34" viewBox="0 0 16 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.51611 0.733398C5.35175 0.733398 3.58396 2.50119 3.58396 4.66555C3.58396 6.82991 5.35175 8.5977 7.51611 8.5977C9.68047 8.5977 11.4483 6.82991 11.4483 4.66555C11.4483 2.50119 9.68047 0.733398 7.51611 0.733398ZM7.51611 2.16327C8.90689 2.16327 10.0184 3.27478 10.0184 4.66555C10.0184 6.05633 8.90689 7.16783 7.51611 7.16783C6.12534 7.16783 5.01383 6.05633 5.01383 4.66555C5.01383 3.27478 6.12534 2.16327 7.51611 2.16327ZM0.724214 10.7425C0.330441 10.7425 0.00927734 11.0637 0.00927734 11.4574V15.7471C0.00927734 16.1408 0.330441 16.462 0.724214 16.462H4.2989V27.901H0.724214C0.330441 27.901 0.00927734 28.2222 0.00927734 28.6159V32.9056C0.00927734 33.2993 0.330441 33.6205 0.724214 33.6205H15.023C15.4167 33.6205 15.7379 33.2993 15.7379 32.9056V28.6159C15.7379 28.2222 15.4167 27.901 15.023 27.901H11.4483V11.4574C11.4483 11.0637 11.1271 10.7425 10.7333 10.7425H0.724214ZM1.43915 12.1724H10.0184V28.6159C10.0184 29.0097 10.3396 29.3309 10.7333 29.3309H14.308V32.1906H1.43915V29.3309H5.01383C5.40761 29.3309 5.72877 29.0097 5.72877 28.6159V15.7471C5.72877 15.3533 5.40761 15.0321 5.01383 15.0321H1.43915V12.1724Z" fill="#0050B2" /></svg> },
    { text: "Одобренные заявки", route: "/registry/3/1", icon: () => <svg width="16" height="34" viewBox="0 0 16 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.51611 0.733398C5.35175 0.733398 3.58396 2.50119 3.58396 4.66555C3.58396 6.82991 5.35175 8.5977 7.51611 8.5977C9.68047 8.5977 11.4483 6.82991 11.4483 4.66555C11.4483 2.50119 9.68047 0.733398 7.51611 0.733398ZM7.51611 2.16327C8.90689 2.16327 10.0184 3.27478 10.0184 4.66555C10.0184 6.05633 8.90689 7.16783 7.51611 7.16783C6.12534 7.16783 5.01383 6.05633 5.01383 4.66555C5.01383 3.27478 6.12534 2.16327 7.51611 2.16327ZM0.724214 10.7425C0.330441 10.7425 0.00927734 11.0637 0.00927734 11.4574V15.7471C0.00927734 16.1408 0.330441 16.462 0.724214 16.462H4.2989V27.901H0.724214C0.330441 27.901 0.00927734 28.2222 0.00927734 28.6159V32.9056C0.00927734 33.2993 0.330441 33.6205 0.724214 33.6205H15.023C15.4167 33.6205 15.7379 33.2993 15.7379 32.9056V28.6159C15.7379 28.2222 15.4167 27.901 15.023 27.901H11.4483V11.4574C11.4483 11.0637 11.1271 10.7425 10.7333 10.7425H0.724214ZM1.43915 12.1724H10.0184V28.6159C10.0184 29.0097 10.3396 29.3309 10.7333 29.3309H14.308V32.1906H1.43915V29.3309H5.01383C5.40761 29.3309 5.72877 29.0097 5.72877 28.6159V15.7471C5.72877 15.3533 5.40761 15.0321 5.01383 15.0321H1.43915V12.1724Z" fill="#0050B2" /></svg> },
    { text: "Отклоненные заявки", route: "/registry/4/1", icon: () => <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8734 0.415039C8.02349 0.415039 0 7.47783 0 16.2777C0 20.6008 1.98283 24.4827 5.16095 27.3592C4.6806 28.8422 3.6082 30.0123 2.52462 30.9116C1.94094 31.3947 1.3824 31.808 0.938354 32.2074C0.717729 32.4057 0.516653 32.6067 0.357468 32.8553C0.198283 33.1038 0.0558544 33.4585 0.156392 33.8383L0.245759 34.1288L0.491519 34.2852C1.41312 34.8158 2.56093 34.9079 3.7981 34.8214C5.03528 34.7348 6.38416 34.4499 7.70791 34.0841C10.2772 33.3747 12.6901 32.3638 13.9636 31.8052C15.2203 32.0677 16.4826 32.2297 17.8064 32.2297C27.6563 32.2297 35.6798 25.1669 35.6798 16.3671C35.6798 7.56999 27.7261 0.415039 17.8734 0.415039ZM17.8734 1.84491C27.0391 1.84491 34.2499 8.43294 34.2499 16.3671C34.2499 24.2956 26.9749 30.7999 17.8064 30.7999C16.4994 30.7999 15.2678 30.6714 14.0306 30.3977L13.7849 30.3307L13.5838 30.4424C12.3885 30.9702 9.8611 32.0007 7.3281 32.6989C6.06021 33.048 4.7979 33.3161 3.70873 33.3915C2.97983 33.4418 2.53021 33.2686 2.0331 33.1457C2.38778 32.8413 2.87371 32.4783 3.44063 32.0063C4.68619 30.973 6.18029 29.5347 6.70253 27.4039L6.81424 26.9571L6.45677 26.689C3.30658 24.0191 1.42987 20.3439 1.42987 16.2777C1.42987 8.34916 8.70491 1.84491 17.8734 1.84491ZM17.0244 8.86023C16.8094 8.86023 16.734 8.9859 16.734 9.12833V11.005C16.734 11.2201 16.882 11.2731 17.0244 11.2731H18.7224C18.9374 11.2731 19.0128 11.1475 19.0128 11.005V9.12833C19.0128 8.91329 18.8648 8.86023 18.7224 8.86023H17.0244ZM17.0915 14.0659C16.8764 14.0659 16.801 14.2139 16.801 14.3563V23.9409C16.801 24.156 16.949 24.2314 17.0915 24.2314V24.2984H18.7224C18.9374 24.2984 19.0128 24.1504 19.0128 24.008V14.3563C19.0128 14.1413 18.8648 14.0659 18.7224 14.0659H17.0915Z" fill="#0050B2" /></svg> },
    { text: "Статистика", route: "/statistics", icon: () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9992 0.199951C6.3848 0.199951 0.199219 6.38553 0.199219 14C0.199219 21.6144 6.3848 27.7999 13.9992 27.7999C21.6136 27.7999 27.7992 21.6144 27.7992 14C27.7992 6.38553 21.6136 0.199951 13.9992 0.199951ZM13.3992 1.47026V6.78706H9.10547C9.33212 6.11852 9.58818 5.49704 9.86953 4.93433C10.8569 2.95951 12.1081 1.75734 13.3992 1.47026ZM14.5992 1.47026C15.8903 1.75734 17.1415 2.95951 18.1289 4.93433C18.4103 5.49704 18.6663 6.11852 18.893 6.78706H14.5992V1.47026ZM10.5082 1.89214C9.86151 2.57117 9.28487 3.42006 8.79609 4.39761C8.4339 5.122 8.11995 5.92758 7.84805 6.78706H3.67266C5.30455 4.4535 7.70195 2.69814 10.5082 1.89214ZM17.4902 1.89214C20.2965 2.69814 22.6939 4.4535 24.3258 6.78706H20.1504C19.8785 5.92758 19.5645 5.122 19.2023 4.39761C18.7136 3.42006 18.1369 2.57117 17.4902 1.89214ZM2.90742 8.01284H7.50352C7.09636 9.65588 6.85991 11.477 6.8168 13.4H1.41797C1.50913 11.4564 2.03505 9.62756 2.90742 8.01284ZM8.74219 8.01284H13.3992V13.4H8.01797C8.06395 11.4577 8.31748 9.62614 8.74219 8.01284ZM14.5992 8.01284H19.2562C19.681 9.62614 19.9345 11.4577 19.9805 13.4H14.5992V8.01284ZM20.4949 8.01284H25.091C25.9634 9.62756 26.4893 11.4564 26.5805 13.4H21.1816C21.1385 11.477 20.9021 9.65588 20.4949 8.01284ZM1.42383 14.6H6.81445C6.8565 16.5246 7.09624 18.3435 7.50352 19.9871H2.90859C2.03592 18.373 1.51512 16.5434 1.42383 14.6ZM8.01445 14.6H13.3992V19.9871H8.74219C8.3173 18.3731 8.0597 16.5437 8.01445 14.6ZM14.5992 14.6H19.984C19.9387 16.5437 19.6811 18.3731 19.2562 19.9871H14.5992V14.6ZM21.184 14.6H26.5746C26.4833 16.5434 25.9625 18.373 25.0898 19.9871H20.4949C20.9022 18.3435 21.1419 16.5246 21.184 14.6ZM3.67617 21.2128H7.84805C8.11995 22.0723 8.4339 22.8779 8.79609 23.6023C9.28487 24.5798 9.86151 25.4287 10.5082 26.1078C7.70292 25.302 5.30834 23.5443 3.67617 21.2128ZM9.10547 21.2128H13.3992V26.5296C12.1081 26.2426 10.8569 25.0404 9.86953 23.0656C9.58818 22.5029 9.33212 21.8814 9.10547 21.2128ZM14.5992 21.2128H18.893C18.6663 21.8814 18.4103 22.5029 18.1289 23.0656C17.1415 25.0404 15.8903 26.2426 14.5992 26.5296V21.2128ZM20.1504 21.2128H24.3223C22.6901 23.5443 20.2955 25.302 17.4902 26.1078C18.1369 25.4287 18.7136 24.5798 19.2023 23.6023C19.5645 22.8779 19.8785 22.0723 20.1504 21.2128Z" fill="#0050B2" /></svg> },
];
export const R_ADMIN_LINKS = [
    { text: "На рассмотрении", route: "/registry/2/1", icon: () => <svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.71961 0.986328V3.84608H0.859863V33.8734H30.8872V9.56557H19.4482V3.84608H16.5885V0.986328H3.71961ZM5.14948 2.4162H15.1586V5.27595H18.0183V32.4435H11.5839V27.439H8.72417V32.4435H2.28974V5.27595H5.14948V2.4162ZM5.14948 6.70582V8.1357H6.57936V6.70582H5.14948ZM8.00923 6.70582V8.1357H9.4391V6.70582H8.00923ZM10.869 6.70582V8.1357H12.2989V6.70582H10.869ZM13.7287 6.70582V8.1357H15.1586V6.70582H13.7287ZM5.14948 10.2805V13.1403H6.57936V10.2805H5.14948ZM8.00923 10.2805V13.1403H9.4391V10.2805H8.00923ZM10.869 10.2805V13.1403H12.2989V10.2805H10.869ZM13.7287 10.2805V13.1403H15.1586V10.2805H13.7287ZM19.4482 10.9954H29.4573V32.4435H19.4482V10.9954ZM20.8781 12.4253V13.8552H22.308V12.4253H20.8781ZM23.7378 12.4253V13.8552H25.1677V12.4253H23.7378ZM26.5976 12.4253V13.8552H28.0275V12.4253H26.5976ZM5.14948 14.5701V17.4299H6.57936V14.5701H5.14948ZM8.00923 14.5701V17.4299H9.4391V14.5701H8.00923ZM10.869 14.5701V17.4299H12.2989V14.5701H10.869ZM13.7287 14.5701V17.4299H15.1586V14.5701H13.7287ZM20.8781 15.2851V16.7149H22.308V15.2851H20.8781ZM23.7378 15.2851V16.7149H25.1677V15.2851H23.7378ZM26.5976 15.2851V16.7149H28.0275V15.2851H26.5976ZM20.8781 18.1448V19.5747H22.308V18.1448H20.8781ZM23.7378 18.1448V19.5747H25.1677V18.1448H23.7378ZM26.5976 18.1448V19.5747H28.0275V18.1448H26.5976ZM5.14948 18.8597V21.7195H6.57936V18.8597H5.14948ZM8.00923 18.8597V21.7195H9.4391V18.8597H8.00923ZM10.869 18.8597V21.7195H12.2989V18.8597H10.869ZM13.7287 18.8597V21.7195H15.1586V18.8597H13.7287ZM20.8781 21.0046V22.4344H22.308V21.0046H20.8781ZM23.7378 21.0046V22.4344H25.1677V21.0046H23.7378ZM26.5976 21.0046V22.4344H28.0275V21.0046H26.5976ZM5.14948 23.1494V26.0091H6.57936V23.1494H5.14948ZM8.00923 23.1494V26.0091H9.4391V23.1494H8.00923ZM10.869 23.1494V26.0091H12.2989V23.1494H10.869ZM13.7287 23.1494V26.0091H15.1586V23.1494H13.7287ZM20.8781 23.8643V25.2942H22.308V23.8643H20.8781ZM23.7378 23.8643V25.2942H25.1677V23.8643H23.7378ZM26.5976 23.8643V25.2942H28.0275V23.8643H26.5976ZM20.8781 26.7241V28.1539H22.308V26.7241H20.8781ZM23.7378 26.7241V28.1539H25.1677V26.7241H23.7378ZM26.5976 26.7241V28.1539H28.0275V26.7241H26.5976ZM5.14948 27.439V31.0137H6.57936V27.439H5.14948ZM13.7287 27.439V31.0137H15.1586V27.439H13.7287ZM20.8781 29.5838V31.0137H22.308V29.5838H20.8781ZM23.7378 29.5838V31.0137H25.1677V29.5838H23.7378ZM26.5976 29.5838V31.0137H28.0275V29.5838H26.5976Z" fill="#0050B2" /></svg> },
    { text: "Одобренные заявки", route: "/registry/3/1", icon: () => <svg width="16" height="34" viewBox="0 0 16 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.51611 0.733398C5.35175 0.733398 3.58396 2.50119 3.58396 4.66555C3.58396 6.82991 5.35175 8.5977 7.51611 8.5977C9.68047 8.5977 11.4483 6.82991 11.4483 4.66555C11.4483 2.50119 9.68047 0.733398 7.51611 0.733398ZM7.51611 2.16327C8.90689 2.16327 10.0184 3.27478 10.0184 4.66555C10.0184 6.05633 8.90689 7.16783 7.51611 7.16783C6.12534 7.16783 5.01383 6.05633 5.01383 4.66555C5.01383 3.27478 6.12534 2.16327 7.51611 2.16327ZM0.724214 10.7425C0.330441 10.7425 0.00927734 11.0637 0.00927734 11.4574V15.7471C0.00927734 16.1408 0.330441 16.462 0.724214 16.462H4.2989V27.901H0.724214C0.330441 27.901 0.00927734 28.2222 0.00927734 28.6159V32.9056C0.00927734 33.2993 0.330441 33.6205 0.724214 33.6205H15.023C15.4167 33.6205 15.7379 33.2993 15.7379 32.9056V28.6159C15.7379 28.2222 15.4167 27.901 15.023 27.901H11.4483V11.4574C11.4483 11.0637 11.1271 10.7425 10.7333 10.7425H0.724214ZM1.43915 12.1724H10.0184V28.6159C10.0184 29.0097 10.3396 29.3309 10.7333 29.3309H14.308V32.1906H1.43915V29.3309H5.01383C5.40761 29.3309 5.72877 29.0097 5.72877 28.6159V15.7471C5.72877 15.3533 5.40761 15.0321 5.01383 15.0321H1.43915V12.1724Z" fill="#0050B2" /></svg> },
    { text: "Отклоненные заявки", route: "/registry/4/1", icon: () => <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8734 0.415039C8.02349 0.415039 0 7.47783 0 16.2777C0 20.6008 1.98283 24.4827 5.16095 27.3592C4.6806 28.8422 3.6082 30.0123 2.52462 30.9116C1.94094 31.3947 1.3824 31.808 0.938354 32.2074C0.717729 32.4057 0.516653 32.6067 0.357468 32.8553C0.198283 33.1038 0.0558544 33.4585 0.156392 33.8383L0.245759 34.1288L0.491519 34.2852C1.41312 34.8158 2.56093 34.9079 3.7981 34.8214C5.03528 34.7348 6.38416 34.4499 7.70791 34.0841C10.2772 33.3747 12.6901 32.3638 13.9636 31.8052C15.2203 32.0677 16.4826 32.2297 17.8064 32.2297C27.6563 32.2297 35.6798 25.1669 35.6798 16.3671C35.6798 7.56999 27.7261 0.415039 17.8734 0.415039ZM17.8734 1.84491C27.0391 1.84491 34.2499 8.43294 34.2499 16.3671C34.2499 24.2956 26.9749 30.7999 17.8064 30.7999C16.4994 30.7999 15.2678 30.6714 14.0306 30.3977L13.7849 30.3307L13.5838 30.4424C12.3885 30.9702 9.8611 32.0007 7.3281 32.6989C6.06021 33.048 4.7979 33.3161 3.70873 33.3915C2.97983 33.4418 2.53021 33.2686 2.0331 33.1457C2.38778 32.8413 2.87371 32.4783 3.44063 32.0063C4.68619 30.973 6.18029 29.5347 6.70253 27.4039L6.81424 26.9571L6.45677 26.689C3.30658 24.0191 1.42987 20.3439 1.42987 16.2777C1.42987 8.34916 8.70491 1.84491 17.8734 1.84491ZM17.0244 8.86023C16.8094 8.86023 16.734 8.9859 16.734 9.12833V11.005C16.734 11.2201 16.882 11.2731 17.0244 11.2731H18.7224C18.9374 11.2731 19.0128 11.1475 19.0128 11.005V9.12833C19.0128 8.91329 18.8648 8.86023 18.7224 8.86023H17.0244ZM17.0915 14.0659C16.8764 14.0659 16.801 14.2139 16.801 14.3563V23.9409C16.801 24.156 16.949 24.2314 17.0915 24.2314V24.2984H18.7224C18.9374 24.2984 19.0128 24.1504 19.0128 24.008V14.3563C19.0128 14.1413 18.8648 14.0659 18.7224 14.0659H17.0915Z" fill="#0050B2" /></svg> },
    { text: "Посмотреть свои заявки", route: "", icon: () => <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14481 0.205078C0.969074 0.205078 0 1.17415 0 2.34989V25.2279C0 26.4036 0.969074 27.3727 2.14481 27.3727H7.14937V25.9428H8.57924V27.3727H27.1676V25.9428H28.5975V27.3727H33.602C34.7778 27.3727 35.7468 26.4036 35.7468 25.2279V5.20964C35.7468 4.0339 34.7778 3.06483 33.602 3.06483H18.5884V2.34989C18.5884 1.17415 17.6193 0.205078 16.4435 0.205078H2.14481ZM2.14481 1.63495H16.4435C16.8457 1.63495 17.1585 1.94774 17.1585 2.34989V4.4947H33.602C34.0042 4.4947 34.317 4.80748 34.317 5.20964V25.2279C34.317 25.63 34.0042 25.9428 33.602 25.9428H30.0273V24.5129H25.7377V25.9428H10.0091V24.5129H5.71949V25.9428H2.14481C1.74266 25.9428 1.42987 25.63 1.42987 25.2279V2.34989C1.42987 1.94774 1.74266 1.63495 2.14481 1.63495ZM9.6293 8.06938C7.22756 8.11407 6.93712 9.94051 7.46215 12.0462C7.36999 12.1049 7.22198 12.3143 7.26108 12.6494C7.33369 13.2722 7.57386 13.4174 7.73025 13.4314C7.7889 14.0123 8.15754 14.7077 8.35582 14.8166C8.35582 15.2299 8.37258 15.5455 8.33348 16.0007C7.85872 17.3273 4.43763 16.9502 4.28962 19.5084H15.0137C14.8657 16.9502 11.4669 17.3273 10.9922 16.0007C10.9531 15.5455 10.9698 15.2299 10.9698 14.8166C11.1681 14.7077 11.5116 14.0123 11.573 13.4314C11.7294 13.4174 11.9696 13.2722 12.0422 12.6494C12.0813 12.3143 11.9333 12.1272 11.8411 12.0686C12.0925 11.2782 12.6091 8.81504 10.8581 8.5609C10.6766 8.23136 10.2297 8.06938 9.6293 8.06938ZM18.5884 10.9291V12.359H31.4572V10.9291H18.5884ZM18.5884 14.5038V15.9337H31.4572V14.5038H18.5884ZM18.5884 18.0785V19.5084H31.4572V18.0785H18.5884Z" fill="#0050B2" /></svg> },
    { text: "Статистика", route: "/statistics", icon: () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.323 0.199952C12.1808 0.200027 12.0433 0.250613 11.9349 0.34269C11.8265 0.434768 11.7543 0.562349 11.7313 0.702686L11.1477 4.27573C10.4459 4.47987 9.77675 4.75532 9.14609 5.09839L6.19766 2.99253C6.08222 2.9101 5.94131 2.87123 5.79994 2.88281C5.65857 2.8944 5.52587 2.95569 5.42539 3.05581L3.09102 5.38784C2.99126 5.48767 2.92988 5.61946 2.91766 5.76006C2.90545 5.90065 2.94318 6.04106 3.02422 6.15659L5.09844 9.12378C4.75007 9.75811 4.46853 10.431 4.25938 11.1394L0.701563 11.7312C0.561656 11.7548 0.434624 11.8271 0.343018 11.9355C0.251411 12.0438 0.201156 12.1811 0.201173 12.323V15.623C0.200917 15.764 0.250343 15.9006 0.340777 16.0089C0.43121 16.1171 0.556871 16.19 0.695704 16.2148L4.25586 16.8453C4.46388 17.5524 4.74363 18.2258 5.09258 18.8609L2.99258 21.7988C2.91015 21.9142 2.87128 22.0551 2.88286 22.1965C2.89444 22.3379 2.95574 22.4706 3.05586 22.571L5.38906 24.9054C5.48867 25.0051 5.62016 25.0665 5.7605 25.0789C5.90084 25.0913 6.04107 25.054 6.15664 24.9734L9.12969 22.8921C9.7622 23.2372 10.433 23.5147 11.1371 23.7207L11.7313 27.2984C11.7546 27.4385 11.8268 27.5658 11.9352 27.6577C12.0436 27.7495 12.181 27.7999 12.323 27.8H15.623C15.7642 27.8002 15.901 27.7506 16.0092 27.6599C16.1175 27.5692 16.1903 27.4433 16.2148 27.3042L16.8512 23.7125C17.5524 23.5034 18.22 23.2218 18.8492 22.8746L21.8422 24.9746C21.9577 25.0556 22.0981 25.0933 22.2387 25.0811C22.3793 25.0689 22.5111 25.0075 22.6109 24.9078L24.9441 22.5722C25.0447 22.4715 25.1061 22.3382 25.1175 22.1963C25.1289 22.0544 25.0895 21.9131 25.0062 21.7976L22.8723 18.8351C23.2135 18.2089 23.4883 17.5453 23.6926 16.8488L27.3031 16.216C27.4422 16.1914 27.5681 16.1186 27.6588 16.0104C27.7494 15.9021 27.799 15.7654 27.7988 15.6242V12.3242C27.7988 12.182 27.7482 12.0444 27.6561 11.936C27.564 11.8276 27.4364 11.7554 27.2961 11.7324L23.6914 11.1429C23.4858 10.4472 23.2102 9.78479 22.8687 9.15894L24.9734 6.16011C25.0545 6.04457 25.0922 5.90417 25.08 5.76357C25.0678 5.62298 25.0064 5.49118 24.9066 5.39136L22.5723 3.05815C22.4715 2.9576 22.3383 2.89615 22.1964 2.88477C22.0545 2.8734 21.9132 2.91284 21.7977 2.99605L18.8434 5.12066C18.2139 4.77484 17.5458 4.49475 16.843 4.28745L16.2148 0.696827C16.1905 0.557564 16.1178 0.431355 16.0096 0.340453C15.9013 0.249551 15.7644 0.199793 15.623 0.199952H12.323ZM12.834 1.39995H15.1191L15.7168 4.81128C15.7367 4.92569 15.7893 5.03188 15.8684 5.11696C15.9474 5.20203 16.0495 5.26234 16.1621 5.29058C17.0396 5.50925 17.8638 5.85588 18.616 6.31128C18.7166 6.37222 18.8329 6.40226 18.9504 6.39768C19.0679 6.3931 19.1814 6.35409 19.277 6.2855L22.0848 4.26753L23.7008 5.88355L21.7016 8.73237C21.6348 8.82741 21.597 8.93978 21.5929 9.05585C21.5887 9.17192 21.6183 9.28671 21.6781 9.38628C22.129 10.1368 22.471 10.9558 22.6895 11.8285C22.7179 11.9421 22.779 12.045 22.8652 12.1243C22.9514 12.2037 23.059 12.256 23.1746 12.275L26.5988 12.8351V15.1203L23.1676 15.7226C23.0531 15.7429 22.9469 15.796 22.862 15.8754C22.7772 15.9549 22.7172 16.0573 22.6895 16.1703C22.4735 17.0418 22.1313 17.8608 21.6805 18.6113C21.6199 18.7118 21.5902 18.8279 21.595 18.9452C21.5998 19.0625 21.6389 19.1758 21.7074 19.271L23.7348 22.0847L22.1187 23.7019L19.2746 21.7062C19.1791 21.6393 19.0662 21.6017 18.9496 21.5979C18.8331 21.5942 18.718 21.6245 18.6184 21.6851C17.8699 22.1405 17.0449 22.4888 16.1703 22.7105C16.0582 22.7388 15.9566 22.7988 15.8778 22.8834C15.7991 22.968 15.7464 23.0736 15.7262 23.1875L15.1203 26.6H12.8316L12.2668 23.2027C12.2476 23.0871 12.1949 22.9797 12.1154 22.8937C12.0358 22.8077 11.9329 22.7469 11.8191 22.7187C10.9411 22.5023 10.1133 22.1562 9.35586 21.7015C9.25642 21.642 9.14186 21.6125 9.02602 21.6166C8.91019 21.6208 8.79804 21.6584 8.70313 21.725L5.88125 23.7019L4.26406 22.0824L6.25859 19.2945C6.32676 19.199 6.36542 19.0856 6.36979 18.9683C6.37417 18.851 6.34406 18.7351 6.2832 18.6347C5.82359 17.8753 5.47599 17.0475 5.25664 16.1656C5.22858 16.0532 5.16861 15.9514 5.08398 15.8724C4.99936 15.7934 4.89368 15.7406 4.77969 15.7203L1.40117 15.1203V12.8316L4.77734 12.2703C4.89276 12.2511 5.00006 12.1987 5.08605 12.1193C5.17204 12.04 5.23296 11.9373 5.26133 11.8238C5.48256 10.9388 5.83 10.1112 6.28789 9.35347C6.34827 9.25399 6.37843 9.1391 6.37468 9.02279C6.37094 8.90649 6.33345 8.79378 6.2668 8.69839L4.2957 5.8812L5.91406 4.26401L8.71133 6.26323C8.80649 6.33109 8.9194 6.36968 9.03619 6.37426C9.15298 6.37884 9.26857 6.34921 9.36875 6.28902C10.1221 5.83653 10.9519 5.4932 11.8309 5.27769C11.9451 5.24956 12.0486 5.18846 12.1284 5.10199C12.2082 5.01552 12.2608 4.9075 12.2797 4.79136L12.834 1.39995ZM14 9.19995C11.3561 9.19995 9.2 11.3561 9.2 14C9.2 16.6438 11.3561 18.8 14 18.8C16.6439 18.8 18.8 16.6438 18.8 14C18.8 11.3561 16.6439 9.19995 14 9.19995ZM14 10.4C15.9953 10.4 17.6 12.0046 17.6 14C17.6 15.9953 15.9953 17.6 14 17.6C12.0047 17.6 10.4 15.9953 10.4 14C10.4 12.0046 12.0047 10.4 14 10.4Z" fill="#0050B2" /></svg> },
];
export const USER_LINKS = [
    { text: "О реестре", route: "/", icon: () => <svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.71961 0.986328V3.84608H0.859863V33.8734H30.8872V9.56557H19.4482V3.84608H16.5885V0.986328H3.71961ZM5.14948 2.4162H15.1586V5.27595H18.0183V32.4435H11.5839V27.439H8.72417V32.4435H2.28974V5.27595H5.14948V2.4162ZM5.14948 6.70582V8.1357H6.57936V6.70582H5.14948ZM8.00923 6.70582V8.1357H9.4391V6.70582H8.00923ZM10.869 6.70582V8.1357H12.2989V6.70582H10.869ZM13.7287 6.70582V8.1357H15.1586V6.70582H13.7287ZM5.14948 10.2805V13.1403H6.57936V10.2805H5.14948ZM8.00923 10.2805V13.1403H9.4391V10.2805H8.00923ZM10.869 10.2805V13.1403H12.2989V10.2805H10.869ZM13.7287 10.2805V13.1403H15.1586V10.2805H13.7287ZM19.4482 10.9954H29.4573V32.4435H19.4482V10.9954ZM20.8781 12.4253V13.8552H22.308V12.4253H20.8781ZM23.7378 12.4253V13.8552H25.1677V12.4253H23.7378ZM26.5976 12.4253V13.8552H28.0275V12.4253H26.5976ZM5.14948 14.5701V17.4299H6.57936V14.5701H5.14948ZM8.00923 14.5701V17.4299H9.4391V14.5701H8.00923ZM10.869 14.5701V17.4299H12.2989V14.5701H10.869ZM13.7287 14.5701V17.4299H15.1586V14.5701H13.7287ZM20.8781 15.2851V16.7149H22.308V15.2851H20.8781ZM23.7378 15.2851V16.7149H25.1677V15.2851H23.7378ZM26.5976 15.2851V16.7149H28.0275V15.2851H26.5976ZM20.8781 18.1448V19.5747H22.308V18.1448H20.8781ZM23.7378 18.1448V19.5747H25.1677V18.1448H23.7378ZM26.5976 18.1448V19.5747H28.0275V18.1448H26.5976ZM5.14948 18.8597V21.7195H6.57936V18.8597H5.14948ZM8.00923 18.8597V21.7195H9.4391V18.8597H8.00923ZM10.869 18.8597V21.7195H12.2989V18.8597H10.869ZM13.7287 18.8597V21.7195H15.1586V18.8597H13.7287ZM20.8781 21.0046V22.4344H22.308V21.0046H20.8781ZM23.7378 21.0046V22.4344H25.1677V21.0046H23.7378ZM26.5976 21.0046V22.4344H28.0275V21.0046H26.5976ZM5.14948 23.1494V26.0091H6.57936V23.1494H5.14948ZM8.00923 23.1494V26.0091H9.4391V23.1494H8.00923ZM10.869 23.1494V26.0091H12.2989V23.1494H10.869ZM13.7287 23.1494V26.0091H15.1586V23.1494H13.7287ZM20.8781 23.8643V25.2942H22.308V23.8643H20.8781ZM23.7378 23.8643V25.2942H25.1677V23.8643H23.7378ZM26.5976 23.8643V25.2942H28.0275V23.8643H26.5976ZM20.8781 26.7241V28.1539H22.308V26.7241H20.8781ZM23.7378 26.7241V28.1539H25.1677V26.7241H23.7378ZM26.5976 26.7241V28.1539H28.0275V26.7241H26.5976ZM5.14948 27.439V31.0137H6.57936V27.439H5.14948ZM13.7287 27.439V31.0137H15.1586V27.439H13.7287ZM20.8781 29.5838V31.0137H22.308V29.5838H20.8781ZM23.7378 29.5838V31.0137H25.1677V29.5838H23.7378ZM26.5976 29.5838V31.0137H28.0275V29.5838H26.5976Z" fill="#0050B2" /></svg> },
    { text: "Подать обращение", route: "/requestForm", icon: () => <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8734 0.415039C8.02349 0.415039 0 7.47783 0 16.2777C0 20.6008 1.98283 24.4827 5.16095 27.3592C4.6806 28.8422 3.6082 30.0123 2.52462 30.9116C1.94094 31.3947 1.3824 31.808 0.938354 32.2074C0.717729 32.4057 0.516653 32.6067 0.357468 32.8553C0.198283 33.1038 0.0558544 33.4585 0.156392 33.8383L0.245759 34.1288L0.491519 34.2852C1.41312 34.8158 2.56093 34.9079 3.7981 34.8214C5.03528 34.7348 6.38416 34.4499 7.70791 34.0841C10.2772 33.3747 12.6901 32.3638 13.9636 31.8052C15.2203 32.0677 16.4826 32.2297 17.8064 32.2297C27.6563 32.2297 35.6798 25.1669 35.6798 16.3671C35.6798 7.56999 27.7261 0.415039 17.8734 0.415039ZM17.8734 1.84491C27.0391 1.84491 34.2499 8.43294 34.2499 16.3671C34.2499 24.2956 26.9749 30.7999 17.8064 30.7999C16.4994 30.7999 15.2678 30.6714 14.0306 30.3977L13.7849 30.3307L13.5838 30.4424C12.3885 30.9702 9.8611 32.0007 7.3281 32.6989C6.06021 33.048 4.7979 33.3161 3.70873 33.3915C2.97983 33.4418 2.53021 33.2686 2.0331 33.1457C2.38778 32.8413 2.87371 32.4783 3.44063 32.0063C4.68619 30.973 6.18029 29.5347 6.70253 27.4039L6.81424 26.9571L6.45677 26.689C3.30658 24.0191 1.42987 20.3439 1.42987 16.2777C1.42987 8.34916 8.70491 1.84491 17.8734 1.84491ZM17.0244 8.86023C16.8094 8.86023 16.734 8.9859 16.734 9.12833V11.005C16.734 11.2201 16.882 11.2731 17.0244 11.2731H18.7224C18.9374 11.2731 19.0128 11.1475 19.0128 11.005V9.12833C19.0128 8.91329 18.8648 8.86023 18.7224 8.86023H17.0244ZM17.0915 14.0659C16.8764 14.0659 16.801 14.2139 16.801 14.3563V23.9409C16.801 24.156 16.949 24.2314 17.0915 24.2314V24.2984H18.7224C18.9374 24.2984 19.0128 24.1504 19.0128 24.008V14.3563C19.0128 14.1413 18.8648 14.0659 18.7224 14.0659H17.0915Z" fill="#0050B2" /></svg> },
    { text: "Реестр", route: "/registry/public/1", icon: () => <svg width="16" height="34" viewBox="0 0 16 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.51611 0.733398C5.35175 0.733398 3.58396 2.50119 3.58396 4.66555C3.58396 6.82991 5.35175 8.5977 7.51611 8.5977C9.68047 8.5977 11.4483 6.82991 11.4483 4.66555C11.4483 2.50119 9.68047 0.733398 7.51611 0.733398ZM7.51611 2.16327C8.90689 2.16327 10.0184 3.27478 10.0184 4.66555C10.0184 6.05633 8.90689 7.16783 7.51611 7.16783C6.12534 7.16783 5.01383 6.05633 5.01383 4.66555C5.01383 3.27478 6.12534 2.16327 7.51611 2.16327ZM0.724214 10.7425C0.330441 10.7425 0.00927734 11.0637 0.00927734 11.4574V15.7471C0.00927734 16.1408 0.330441 16.462 0.724214 16.462H4.2989V27.901H0.724214C0.330441 27.901 0.00927734 28.2222 0.00927734 28.6159V32.9056C0.00927734 33.2993 0.330441 33.6205 0.724214 33.6205H15.023C15.4167 33.6205 15.7379 33.2993 15.7379 32.9056V28.6159C15.7379 28.2222 15.4167 27.901 15.023 27.901H11.4483V11.4574C11.4483 11.0637 11.1271 10.7425 10.7333 10.7425H0.724214ZM1.43915 12.1724H10.0184V28.6159C10.0184 29.0097 10.3396 29.3309 10.7333 29.3309H14.308V32.1906H1.43915V29.3309H5.01383C5.40761 29.3309 5.72877 29.0097 5.72877 28.6159V15.7471C5.72877 15.3533 5.40761 15.0321 5.01383 15.0321H1.43915V12.1724Z" fill="#0050B2" /></svg> },
    { text: "Контактные информация", route: "", icon: () => <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14481 0.205078C0.969074 0.205078 0 1.17415 0 2.34989V25.2279C0 26.4036 0.969074 27.3727 2.14481 27.3727H7.14937V25.9428H8.57924V27.3727H27.1676V25.9428H28.5975V27.3727H33.602C34.7778 27.3727 35.7468 26.4036 35.7468 25.2279V5.20964C35.7468 4.0339 34.7778 3.06483 33.602 3.06483H18.5884V2.34989C18.5884 1.17415 17.6193 0.205078 16.4435 0.205078H2.14481ZM2.14481 1.63495H16.4435C16.8457 1.63495 17.1585 1.94774 17.1585 2.34989V4.4947H33.602C34.0042 4.4947 34.317 4.80748 34.317 5.20964V25.2279C34.317 25.63 34.0042 25.9428 33.602 25.9428H30.0273V24.5129H25.7377V25.9428H10.0091V24.5129H5.71949V25.9428H2.14481C1.74266 25.9428 1.42987 25.63 1.42987 25.2279V2.34989C1.42987 1.94774 1.74266 1.63495 2.14481 1.63495ZM9.6293 8.06938C7.22756 8.11407 6.93712 9.94051 7.46215 12.0462C7.36999 12.1049 7.22198 12.3143 7.26108 12.6494C7.33369 13.2722 7.57386 13.4174 7.73025 13.4314C7.7889 14.0123 8.15754 14.7077 8.35582 14.8166C8.35582 15.2299 8.37258 15.5455 8.33348 16.0007C7.85872 17.3273 4.43763 16.9502 4.28962 19.5084H15.0137C14.8657 16.9502 11.4669 17.3273 10.9922 16.0007C10.9531 15.5455 10.9698 15.2299 10.9698 14.8166C11.1681 14.7077 11.5116 14.0123 11.573 13.4314C11.7294 13.4174 11.9696 13.2722 12.0422 12.6494C12.0813 12.3143 11.9333 12.1272 11.8411 12.0686C12.0925 11.2782 12.6091 8.81504 10.8581 8.5609C10.6766 8.23136 10.2297 8.06938 9.6293 8.06938ZM18.5884 10.9291V12.359H31.4572V10.9291H18.5884ZM18.5884 14.5038V15.9337H31.4572V14.5038H18.5884ZM18.5884 18.0785V19.5084H31.4572V18.0785H18.5884Z" fill="#0050B2" /></svg> },
    { text: "Войти", route: "/login", icon: () => <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14481 0.205078C0.969074 0.205078 0 1.17415 0 2.34989V25.2279C0 26.4036 0.969074 27.3727 2.14481 27.3727H7.14937V25.9428H8.57924V27.3727H27.1676V25.9428H28.5975V27.3727H33.602C34.7778 27.3727 35.7468 26.4036 35.7468 25.2279V5.20964C35.7468 4.0339 34.7778 3.06483 33.602 3.06483H18.5884V2.34989C18.5884 1.17415 17.6193 0.205078 16.4435 0.205078H2.14481ZM2.14481 1.63495H16.4435C16.8457 1.63495 17.1585 1.94774 17.1585 2.34989V4.4947H33.602C34.0042 4.4947 34.317 4.80748 34.317 5.20964V25.2279C34.317 25.63 34.0042 25.9428 33.602 25.9428H30.0273V24.5129H25.7377V25.9428H10.0091V24.5129H5.71949V25.9428H2.14481C1.74266 25.9428 1.42987 25.63 1.42987 25.2279V2.34989C1.42987 1.94774 1.74266 1.63495 2.14481 1.63495ZM9.6293 8.06938C7.22756 8.11407 6.93712 9.94051 7.46215 12.0462C7.36999 12.1049 7.22198 12.3143 7.26108 12.6494C7.33369 13.2722 7.57386 13.4174 7.73025 13.4314C7.7889 14.0123 8.15754 14.7077 8.35582 14.8166C8.35582 15.2299 8.37258 15.5455 8.33348 16.0007C7.85872 17.3273 4.43763 16.9502 4.28962 19.5084H15.0137C14.8657 16.9502 11.4669 17.3273 10.9922 16.0007C10.9531 15.5455 10.9698 15.2299 10.9698 14.8166C11.1681 14.7077 11.5116 14.0123 11.573 13.4314C11.7294 13.4174 11.9696 13.2722 12.0422 12.6494C12.0813 12.3143 11.9333 12.1272 11.8411 12.0686C12.0925 11.2782 12.6091 8.81504 10.8581 8.5609C10.6766 8.23136 10.2297 8.06938 9.6293 8.06938ZM18.5884 10.9291V12.359H31.4572V10.9291H18.5884ZM18.5884 14.5038V15.9337H31.4572V14.5038H18.5884ZM18.5884 18.0785V19.5084H31.4572V18.0785H18.5884Z" fill="#0050B2" /></svg> },
];