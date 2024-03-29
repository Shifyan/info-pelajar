'use client'

import { Sidebar } from 'flowbite-react'
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser
} from 'react-icons/hi'

export default function SidebarComponent() {
  return (
    <Sidebar
      aria-label='Sidebar with multi-level dropdown example'
      className=' h-screen'
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href='/dashboard' icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label='Data Pelajar'>
            <Sidebar.Item href='/dashboard/lihatdata'>Lihat Data</Sidebar.Item>
            <Sidebar.Item href='/dashboard/ubahdata'>Ubah Data</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href='#' icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href='#' icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href='#' icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href='#' icon={HiArrowSmRight}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
