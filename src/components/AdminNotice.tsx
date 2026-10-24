import { Info } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

// Shown at the top of every admin page.
export default function AdminNotice() {
  return (
    <Alert className="mt-6">
      <Info />
      <AlertTitle>ADMIN 토큰으로 저장소에 직접 반영합니다</AlertTitle>
      <AlertDescription>
        이 저장소(ShinHeeYoun/ShinHeeYoun.github.io) 전용, Contents: Read and write 권한만 있는 fine-grained PAT를 사용하세요.
        토큰은 브라우저 localStorage에 저장되니 공용 PC에서는 ADMIN에서 로그아웃하세요.
      </AlertDescription>
    </Alert>
  )
}
