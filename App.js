import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18next';
import i18nInit from './src/i18n';

const App = () => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const _onLanguagesChange = () => {
      console.log('_onLanguagesChange');
      const locales = RNLocalize.getLocales();
      const locale =
        locales && locales.length > 0 ? locales[0].languageCode : 'en';
      i18n.changeLanguage(locale);
      setLocale(locale);
    };

    RNLocalize.addEventListener('change', _onLanguagesChange);

    return () => RNLocalize.removeEventListener('change', _onLanguagesChange);
  }, []);

  const add_Russian = () => {
    // call api
    i18n.addResourceBundle(
      'ru',
      'translation',
      {
        current: 'Russian language!! "{{language}}"',
      },
      true,
      true,
    );
    i18n.changeLanguage('ru');
    setLocale('ru');
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{i18n.t('current', {language: 'haha'})}</Text>
      <TouchableOpacity
        onPress={() => {
          add_Russian();
        }}>
        <Text
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'red',
            color: 'white',
            marginTop: 20,
          }}>
          Change Language
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
