import Titulo from '../../components/Titulo'
import P from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <P tipo="secundario">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
      officiis facere minima, quis tempora nostrum iusto quos repudiandae
      assumenda rem aperiam et voluptatibus! Praesentium, beatae atque quos iste
      nesciunt accusamus!
    </P>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=glacerdaar&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=glacerdaar&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
