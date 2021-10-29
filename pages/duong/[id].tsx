import Head from "next/dist/shared/lib/head"
import Router from "next/dist/server/router"
import { useRouter } from "next/dist/client/router"
import Link from 'next/link'


export default function DanDuong(){
    const router = useRouter();

    function HandleOnclick(){
        router.push('/duong');
    }

    return (
        <>
            <Head>
                <title>DI ĐỘNG ĐƯỜNG</title>
            </Head>
            <h1>DI ĐỘNG ĐƯỜNG</h1>
            <h2>Chuyên quản lý đi lại</h2>
            <button style = {{display: 'block'}} onClick = {HandleOnclick}>Trở lại Đường </button>
            <Link href = "/duong/danduong">
                <a style = {{display: 'block'}}>Đến Đan Đường</a>
            </Link>
            <Link href = "/duong/khiduong" style = "display: block">
                <a style = {{display: 'block'}}>Đến Khí Đường</a>
            </Link>
            <Link href = "/duong/tranduong">
                <a style = {{display: 'block'}}>Đến Trận Đường</a>
            </Link>

           

        </>

    )
}