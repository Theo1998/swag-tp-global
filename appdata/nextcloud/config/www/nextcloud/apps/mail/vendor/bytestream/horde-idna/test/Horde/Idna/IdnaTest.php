<?php
class IdnaTest extends \PHPUnit\Framework\TestCase
{
    /**
     * @dataProvider domainNamesProvider
     */
    public function testEncode($decoded, $encoded)
    {
        $idna = new Horde_Idna();

        $this->assertEquals(
            $encoded,
            $idna->encode($decoded)
        );
    }

    /**
     * @dataProvider domainNamesProvider
     */
    public function testDecode($decoded, $encoded)
    {
        $idna = new Horde_Idna();

        $this->assertEquals(
            $decoded,
            $idna->decode($encoded)
        );
    }

    /**
     */
    public function domainNamesProvider()
    {
        return array(
            // http://en.wikipedia.org/wiki/.test_(international_domain_name)#Test_TLDs
            array(
                'مثال.إختبار',
                'xn--mgbh0fb.xn--kgbechtv',
            ),
            array(
                'مثال.آزمایشی',
                'xn--mgbh0fb.xn--hgbk6aj7f53bba',
            ),
            array(
                '例子.测试',
                'xn--fsqu00a.xn--0zwm56d',
            ),
            array(
                '例子.測試',
                'xn--fsqu00a.xn--g6w251d',
            ),
            array(
                'пример.испытание',
                'xn--e1afmkfd.xn--80akhbyknj4f',
            ),
            array(
                'उदाहरण.परीक्षा',
                'xn--p1b6ci4b4b3a.xn--11b5bs3a9aj6g',
            ),
            array(
                'παράδειγμα.δοκιμή',
                'xn--hxajbheg2az3al.xn--jxalpdlp',
            ),
            array(
                '실례.테스트',
                'xn--9n2bp8q.xn--9t4b11yi5a',
            ),
            array(
                'בײַשפּיל.טעסט',
                'xn--fdbk5d8ap9b8a8d.xn--deba0ad',
            ),
            array(
                '例え.テスト',
                'xn--r8jz45g.xn--zckzah',
            ),
            array(
                'உதாரணம்.பரிட்சை',
                'xn--zkc6cc5bi7f6e.xn--hlcj6aya9esc7a',
            ),
            array(
                'derhausüberwacher.de',
                'xn--derhausberwacher-pzb.de',
            ),
            array(
                'renangonçalves.com',
                'xn--renangonalves-pgb.com',
            ),
            array(
                'рф.ru',
                'xn--p1ai.ru',
            ),
            array(
                'δοκιμή.gr',
                'xn--jxalpdlp.gr',
            ),
            array(
                'ফাহাদ্১৯.বাংলা',
                'xn--65bj6btb5gwimc.xn--54b7fta0cc',
            ),
            array(
                '𐌀𐌖𐌋𐌄𐌑𐌉·𐌌𐌄𐌕𐌄𐌋𐌉𐌑.gr',
                'xn--uba5533kmaba1adkfh6ch2cg.gr',
            ),
            array(
                'guangdong.广东',
                'guangdong.xn--xhq521b',
            ),
            array(
                'gwóźdź.pl',
                'xn--gwd-hna98db.pl',
            ),
        );
    }
}
