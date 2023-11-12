import { useLoaderData } from "@remix-run/react"
import electron from "~/electron.server"
import noSpaceIcon from '~/assets/favicon.ico'
import spaceIcon from '~/assets/favicon copy.ico'
export function loader() {
	return {
		userDataPath: electron.app.getPath("userData"),
	}
}

export default function Index() {
	const data = useLoaderData<typeof loader>()
	return (
		<main>
			<h1>Welcome to Remix</h1>
			<p>User data path: {data.userDataPath}</p>
      <div>Public folder:
      <br />
      <div>No space: </div>
      <img src="/favicon.ico" alt="shows" style={{ width: '32px', height: '32px' }} />
      <br />
      <div>Space: </div>
      <img src="/favicon copy.ico" alt="doesn't show" style={{ width: '32px', height: '32px' }} />
      </div>
      <br />
      <div>Assets Folder:
      <br />
      <div>No space: </div>
      <img src={noSpaceIcon} alt="shows" style={{ width: '32px', height: '32px' }} />
      <br />
      <div>Space: </div>
      <img src={spaceIcon} alt="doesn't show" style={{ width: '32px', height: '32px' }} />
      </div>
		</main>
	)
}
