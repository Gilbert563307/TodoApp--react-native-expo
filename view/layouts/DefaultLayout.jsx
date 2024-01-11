import React from 'react'
import { SafeAreaView } from 'react-native'

export default function DefaultLayout({children}) {
  return (
    <SafeAreaView>
      {children}
    </SafeAreaView>
  )
}
