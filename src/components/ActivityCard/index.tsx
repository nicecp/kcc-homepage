import styled from 'styled-components'
import Column from '../Column'

export interface ActivityCardProps {
  title: string
  deadLine: string
  route: string
}

const Title = styled.span``

const ActivityCardWrap = styled(Column)`
  width: 280px;
  height: 208px;
  background: rgba(151, 208, 195, 0.21);
`
const ActivityCard: React.SFC<ActivityCardProps> = () => {
  return (
    <ActivityCardWrap>
      <Title>kkk</Title>
    </ActivityCardWrap>
  )
}

export default ActivityCard
