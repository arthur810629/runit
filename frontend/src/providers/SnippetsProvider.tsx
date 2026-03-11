import { useMemo } from 'react';
import type { PropsWithChildren } from 'react';
import axios from 'axios';

import { SnippetsContext } from '../contexts';
import routes from '../routes';

function SnippetsProvider({ children }: PropsWithChildren) {
  const getSnippetData = async (id: string) => {
    const response = await axios.get(routes.getSnippetPath(id));
    return response.data;
  };

  const getSnippetDataByViewParams = async ({
    username,
    slug,
  }: {
    username: string;
    slug: string;
  }) => {
    const response = await axios.get(
      routes.getSnippetPathByParams(username, slug),
    );
    return response.data;
  };

  const saveSnippet = async (code: string, name: string, language: string) => {
    const { data } = await axios.post(routes.createSnippetPath(), {
      name,
      code,
      language,
    });
    return data.id;
  };

  const deleteSnippet = async (...decodedId: string[]) => {
    const response = await Promise.all(
      decodedId.map((id) => axios.delete(routes.deleteSnippetPath(id))),
    );
    return response;
  };

  const renameSnippet = async (decodedId: string, data: unknown) => {
    const response = await axios.put(routes.updateSnippetPath(decodedId), data);
    return response.data;
  };

  const updateSnippet = async (id: string, data: unknown) => {
    const response = await axios.put(routes.updateSnippetPath(id), data);
    return response.data;
  };

  const hasViewSnippetParams = (
    urlData: { username?: string; slug?: string } = {},
  ) => Boolean(urlData.username && urlData.slug);

  const genViewSnippetLink = (username: string, slug: string) => {
    const url = new URL(
      routes.snippetPagePath(username, slug),
      window.location.origin,
    );
    return url.toString();
  };

  const genEmbedSnippetLink = (username: string, slug: string) => {
    const url = new URL(
      routes.embedSnippetPagePath(username, slug),
      window.location.origin,
    );
    return url.toString();
  };

  const genEmbedFrame = (link: string) => `<iframe
  src="${link}"
  title="RunIT Snippet"
  loading="lazy"
  style="width: 100%; height: 300px; border: 0;"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
></iframe>`;

  const getDefaultSnippetName = async () => {
    const response = await axios.get(routes.getDefaultSnippetName());
    return response.data;
  };

  const memoizedValue = useMemo(
    () => ({
      saveSnippet,
      renameSnippet,
      updateSnippet,
      deleteSnippet,
      genEmbedFrame,
      genViewSnippetLink,
      getSnippetData,
      getSnippetDataByViewParams,
      hasViewSnippetParams,
      genEmbedSnippetLink,
      getDefaultSnippetName,
    }),
    [],
  );

  return (
    <SnippetsContext.Provider value={memoizedValue}>
      {children}
    </SnippetsContext.Provider>
  );
}

export default SnippetsProvider;
